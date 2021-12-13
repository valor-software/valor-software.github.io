import {Component, OnDestroy} from '@angular/core';
import {IPortfolio} from "./portfolio.list";
import {Subscription} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";
import {GetPortfolioService} from "./getPortfolio.service";
import {filter} from "rxjs/operators";
import { DomSanitizer } from '@angular/platform-browser';
import {SwiperOptions} from "swiper";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'project',
    templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnDestroy{
    changeBreadCrumbTitle?: {path: string, title: string}[];
    project?: IPortfolio;
    $routEvents?: Subscription;
    testConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 1,
        slideToClickedSlide: true,
        pagination: {
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1.4
            },
            1280: {
                slidesPerView: 1.8
            },
        }
    };

    constructor(
        private router: Router,
        private getProjectsServ: GetPortfolioService,
        private sanitizer: DomSanitizer
    ) {
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.checkRoutePath();
        });
    }

    checkRoutePath() {
        const artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;

        if (!artTitle) {
            this.router.navigate(['/portfolio']);
        }

        if (artTitle) {
            this.getProjectsServ.getPortfolioRequest(artTitle).subscribe((res: IPortfolio) => {
                this.changeBreadCrumbTitle = [{
                    path: artTitle,
                    title: res.name
                }];
                this.project = res;

                console.log(this.project);
            }, error => {
                console.log('error', error);
                this.router.navigate(['/portfolio']);
            });
        }
    }

    getSafeUrl(url?: string) {
        if (!url) {
            return '';
        };

        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    ngOnDestroy() {
        this.$routEvents?.unsubscribe();
    }
}