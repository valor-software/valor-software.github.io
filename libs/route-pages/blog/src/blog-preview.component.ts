import {Component, OnDestroy} from '@angular/core';
import { GetArticlesService } from "./getArticles.service";
import { IArticle } from "./articles.list";
import { forkJoin, Subscription } from "rxjs";
import {ArticlesRouteService} from "./articlesRoute.service";
import SwiperCore, { Pagination, SwiperOptions  } from "swiper";
SwiperCore.use([Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog-preview',
    templateUrl: './blog-preview.component.html'
})
export class BlogPreviewComponent implements OnDestroy{
    articles?: IArticle[];
    $articles?: Subscription;
    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        slideToClickedSlide: true,
        pagination: {
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            }
        }
    };


    constructor(
        private getArticles: GetArticlesService,
        private articleRoute: ArticlesRouteService
    ) {
        this.$articles = forkJoin(this.getArticles.getPreviewArticle()).subscribe((res: IArticle[] | undefined) => {
            this.articles = res;
        });
    }

    ngOnDestroy() {
        this.$articles?.unsubscribe();
    }

    route(title: string) {
        this.articleRoute.route(title);
    }
}