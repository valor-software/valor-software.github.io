import { Component, OnDestroy, Type } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { forkJoin, Subscription } from "rxjs";
import { GetArticlesService, IArticle } from "@valor-software/common-docs";
import { GetPortfolioService, IPortfolio } from "@valor-software/portfolio";
import SwiperCore, { Pagination, SwiperOptions  } from "swiper";

SwiperCore.use([Pagination]);

const generalPaths = {
    BLOG: 'articles',
    PORTFOLIO: 'projects'
};

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'general-page',
    templateUrl: './general-page.component.html'
})
export class GeneralPageComponent implements OnDestroy{
    routeUrl?: string;
    $generalSubscription?: Subscription;
    articles?: IArticle[];
    firstArticles?: IArticle[];
    firstProjects?: IPortfolio[];
    projects?: IPortfolio[];
    activeArticle?: IArticle;
    activeProject?: IPortfolio;

    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 0,
        pagination: {
            clickable: true
        }
    };

    constructor(
        private router: Router,
        private getArticlesServ: GetArticlesService,
        private getPortfolio: GetPortfolioService,
    ) {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(event => {
                this.routeUrl = this.router.parseUrl(this.router.url).root.children["primary"]?.segments[0].path;
                if (this.isBlogPage()) {
                    this.$generalSubscription = forkJoin(this.getArticlesServ.getFullListOfArticles()).subscribe((res: IArticle[] | undefined) => {
                        if (res) {
                            this.articles = res;
                            this.firstArticles = this.getFirstProjects(res);
                            this.activeArticle = this.firstArticles[0];
                            this.filterFirstItems();
                        }
                    });
                    return;
                }

                this.$generalSubscription = forkJoin(this.getPortfolio.getFullListOfPortfolio()).subscribe((res: IPortfolio[] | undefined) => {
                    if (res) {
                        this.projects = Object.assign(res);
                        this.firstProjects = this.getFirstProjects(res);
                        this.activeProject = this.firstProjects[0];
                        this.filterFirstItems();
                    }
                });
            });
    }

    isBlogPage() {
        return this.routeUrl === generalPaths.BLOG;
    }

    getFirstProjects <Type>(value: Type[]): Type[] {
        return value.slice(0,4);
    }

    route(link?: string) {
        if (!link) {
            return;
        }

        if (this.isBlogPage()) {
            const title = this.getArticlesServ.getRefactoredTitle(link);
            this.router.navigate(['articles', title]);
            return;
        }

        this.router.navigate(['projects', this.getPortfolio.getRefactoredTitle(link)]);
    }

    filterFirstItems() {
        if (this.activeArticle){
            this.firstArticles = this.firstArticles?.filter(item => item !== this.activeArticle);
        }

        if (this.activeProject) {
            this.firstProjects = this.firstProjects?.filter(item => item !== this.activeProject);
        }
    }

    ngOnDestroy() {
        if (this.$generalSubscription) {
            this.$generalSubscription.unsubscribe();
        }
    }

}