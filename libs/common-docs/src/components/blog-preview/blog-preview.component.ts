import {Component, OnDestroy, Input, OnInit} from '@angular/core';
import { GetArticlesService } from "../../services/getArticles.service";
import { IArticle } from "../../models/article.interface";
import { forkJoin, Subscription } from "rxjs";
import { BlogArticlesRouteService } from "../../services/blogArticlesRoute.service";
import SwiperCore, { Pagination, SwiperOptions  } from "swiper";
SwiperCore.use([Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog-preview',
    templateUrl: './blog-preview.component.html'
})
export class BlogPreviewComponent implements OnDestroy, OnInit{
    @Input() articlesList?: string[];
    articles?: IArticle[];
    $articles?: Subscription;
    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        slideToClickedSlide: true,
        mousewheel: {
            releaseOnEdges: true
        },
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
        private articleRoute: BlogArticlesRouteService
    ) {}

    ngOnInit() {
        if (this.articlesList?.length) {
            this.$articles = forkJoin(this.getArticles.getArticlesByNames(this.articlesList)).subscribe((res: IArticle[] | undefined) => {
                this.articles = res;
            });
        }

        if (!this.articlesList?.length) {
            this.$articles = forkJoin(this.getArticles.getPreviewArticle()).subscribe((res: IArticle[] | undefined) => {
                this.articles = res;
            });
        }
    }

    ngOnDestroy() {
        this.$articles?.unsubscribe();
    }

    getRouteLink(link: string): string {
        return this.articleRoute.getRouteLink(link);
    }
}