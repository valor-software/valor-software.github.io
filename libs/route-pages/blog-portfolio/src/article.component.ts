import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from "@angular/router";
import { IArticle } from "@valor-software/common-docs";
import { filter } from 'rxjs/operators';
import {Subscription, forkJoin} from "rxjs";
import {GetBlogsService} from "./services/getBlogs.service";
import { titleRefactoring } from "./utils/titleRefactoring";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnDestroy{
    changeBreadCrumbTitle?: {path: string, title: string}[];
    article?: IArticle;
    $routEvents?: Subscription;

    constructor(
        private router: Router,
        private sanitizer: DomSanitizer,
        private getBlogsService: GetBlogsService
    ) {
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.checkRoutePath();
        });

        if (!this.article) {
            this.checkRoutePath();
        }
    }

    checkRoutePath() {
        const artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
        if (!artTitle) {
            this.router.navigate(['/blog']);
            return;
        }

        this.getBlogsService.getArticle(artTitle)
        forkJoin(this.getBlogsService.getArticle(artTitle)).subscribe(res => {
            let generalInfo;
            let article;

            if (res.length > 1) {
                const list = this.getBlogsService.parseContent(res[0].content).list;
                const index = list.findIndex((item: string) => item === titleRefactoring(artTitle));
                if (!index && index !== 0) {
                    return;;
                }

                generalInfo = this.getBlogsService.parseContent(res[0].content).info[index];
                article = this.getBlogsService.decodeContent(res[1]?.content);
            }

            if (res.length < 2) {
                article = this.getBlogsService.decodeContent(res[0]?.content);
                const index = this.getBlogsService.blogs?.list.findIndex((item: string) => item === titleRefactoring(artTitle));
                if (!index && index !== 0) {
                    return;;
                }

                generalInfo = this.getBlogsService.blogs?.info[index];
            }

            if (!generalInfo || !article) {
                this.router.navigate(['/blog']);
                return;
            }

            this.article = {... generalInfo, content: this.getBlogsService.parseHtmlContent(article)};
            if (!this.article) {
                return;;
            }

            this.changeBreadCrumbTitle = [{
              path: artTitle,
              title: this.article.title
            }];

        }, error => {
            console.log('error', error);
            this.router.navigate(['/blog']);
        })
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