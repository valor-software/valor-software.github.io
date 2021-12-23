import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from "@angular/router";
import { GetArticlesService } from "@valor-software/common-docs";
import { IArticle } from "@valor-software/common-docs";
import { filter, switchMap, catchError } from 'rxjs/operators';
import { Subscription, of } from "rxjs";


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
            this.getArticleServ.getArticleRequest(artTitle).pipe(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
              switchMap((art) => {
                  this.article = art;
                  this.changeBreadCrumbTitle = [{
                      path: artTitle,
                      title: art.title
                  }];
                  if (art.contentUrl) {
                      return this.getArticleServ.getHTMLSource(artTitle);
                  }
              }),
                catchError(error => {
                    if (!this.article) {
                        this.router.navigate(['/blog']);
                    }
                    return of();
                })
            ).subscribe(res => {
                if (this.article) {
                    this.article.content = res;
                }
            }, error => {
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