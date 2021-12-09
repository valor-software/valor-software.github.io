import {Component, OnDestroy} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {NavigationEnd, Router} from "@angular/router";
import { GetArticlesService } from "./getArticles.service";
import {IArticle} from "./articles.list";
import { filter } from 'rxjs/operators';
import {Subscription} from "rxjs";


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'article-block',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnDestroy{
    changeBreadCrumbTitle?: {path: string, title: string}[];
    article?: IArticle;
    $routEvents?: Subscription;
    constructor(
        private router: Router,
        private getArticleServ: GetArticlesService,
        private sanitizer: DomSanitizer
    ) {
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.checkRoutePath();
        });
    }

    checkRoutePath() {
        const artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;

        if (!artTitle) {
            this.router.navigate(['/blog']);
        }

        if (artTitle) {
            this.getArticleServ.getArticleRequest(artTitle).subscribe((res: IArticle) => {
                this.changeBreadCrumbTitle = [{
                    path: artTitle,
                    title: res.title
                }];
                this.article = res;
            }, error => {
                console.log('error', error);
                this.router.navigate(['/blog']);
            });
        }
    }

    checkHTML(html: string) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    routLink(event: any) {
        const element = event.target;

        if (element.nodeName === 'A' && element.getAttribute('routerLink')) {
            event.preventDefault();
            const link = element.getAttribute('routerLink');
            this.router.navigate([link]);
        }
    }

    ngOnDestroy() {
        this.$routEvents?.unsubscribe();
    }

}