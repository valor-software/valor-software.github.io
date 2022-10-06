import { Component, OnDestroy, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GetArticlesService } from "../../services/getArticles.service";
import { IArticle } from "../../models/article.interface";
import { forkJoin, Subscription } from "rxjs";
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { titleRefactoring } from "../../utils/titleRefactoringUtil";
SwiperCore.use([Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog-preview',
    templateUrl: './blog-preview.component.html'
})
export class BlogPreviewComponent implements OnDestroy, OnInit, OnChanges {
    @Input() articlesList?: string[];
    @Input() currentArticle?: IArticle;
    allArticles?: IArticle[];
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
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.currentArticle) {
            this.setMoreArticlesList();
        }
    }

    ngOnInit() {
        if (this.articlesList?.length) {
            this.$articles = forkJoin(this.getArticles.getArticlesByNames(this.articlesList)).subscribe((res: IArticle[] | undefined) => {
                this.articles = res;
            });
        }

        if (!this.articlesList?.length) {
            this.$articles = forkJoin(this.getArticles.getPreviewArticle()).subscribe((res: IArticle[] | undefined) => {
                this.allArticles = res;
                this.setMoreArticlesList();
            });
        }
    }

    setMoreArticlesList() {
        let articles = this.allArticles;

        if (this.currentArticle) {
            articles = articles?.filter(article => article.order !== this.currentArticle?.order);
        }

        this.articles = articles?.slice(0, 3);
    };

    ngOnDestroy() {
        this.$articles?.unsubscribe();
    }

    getRouteLink(link: string): string {
        return titleRefactoring(link);
    }
}