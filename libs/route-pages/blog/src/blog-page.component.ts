import { Component } from '@angular/core';
import { forkJoin, Subscription } from "rxjs";
import { ArticlesRouteService, GetArticlesService, IArticle } from "@valor-software/common-docs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog',
    templateUrl: './blog-page.component.html'
})
export class BlogPageComponent {
    $articles?: Subscription;
    articles?: IArticle[];
    firstArticles?: IArticle[];
    articlesAmount = 4;
    activeArticle?: IArticle;

    constructor(
        private getArticles: GetArticlesService,
        private routeArticle: ArticlesRouteService
    ) {
        this.$articles = forkJoin(this.getArticles.getFullListOfArticles()).subscribe((res: IArticle[] | undefined) => {
            if (res) {
                this.articles = res;
                this.firstArticles = this.getLastArticles(res);
                this.activeArticle = this.firstArticles[0];
            }
        });
    }

    getLastArticles(value: IArticle[]) {
        return value.slice(0,4);
    }

    route(title: string) {
        this.routeArticle.route(title);
    }
}