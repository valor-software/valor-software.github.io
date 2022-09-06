import { Component, Inject, HostListener, OnDestroy, AfterViewInit } from '@angular/core';
import { SeoService, titleRefactoring } from "@valor-software/common-docs";
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, pairwise } from "rxjs/operators";
import { Subscription } from "rxjs";
import { linksFromOldSite } from 'assets/articles/brokenRoutes';

const notFoundPageUrl = '/404';

@Component({
  selector: 'valor-software-site-base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, AfterViewInit {
    title = 'valor-software-site';
    scrollPosition = 0;
    $routeEvents?: Subscription;
    $routerEventNavigationEnd: Subscription;
    showFooterAndHeader = true;
    $routeEventsRecognized?: Subscription;

    @HostListener('window:beforeunload') private onReload() {
        window.sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }

    constructor(
      private seo: SeoService,
      private router: Router,
      @Inject(DOCUMENT) private document: any
    ) {
        const scrollItem = window.sessionStorage.getItem('scrollPosition');
        this.scrollPosition = scrollItem || scrollItem == '0' ? Number(scrollItem) : 0;
        this.$routerEventNavigationEnd = router.events.pipe(
            filter(evt => evt instanceof NavigationEnd)
        ).subscribe(res => {
            this.showFooterAndHeader = !!(this.router.url === notFoundPageUrl);
        });
    }

    scrollToPosition(value: number) {
        setTimeout(() => {
            window.scrollTo(0, value);
            window.sessionStorage.removeItem('scrollPosition');
        }, 50);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            if (this.scrollPosition) {
                this.scrollToPosition(this.scrollPosition);
            }
        }, 300);

        this.$routeEvents = this.router.events
            .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
            .subscribe((events: RoutesRecognized[]) => {
                const previousUrl = events[0].urlAfterRedirects;
                const currentUrl = events[1].urlAfterRedirects;
                if (previousUrl === currentUrl) {
                    return;
                }

                const previousFragment = this.router.parseUrl(events[0].urlAfterRedirects).fragment;
                const currentFragment = this.router.parseUrl(events[1].urlAfterRedirects).fragment;
                const previousRouteUrl = this.router.parseUrl(events[0].urlAfterRedirects).root.children["primary"]?.segments[0].path;
                const currentRouteUrl = this.router.parseUrl(events[1].urlAfterRedirects).root.children["primary"]?.segments[0].path;
                if (previousUrl !== currentUrl && previousRouteUrl === currentRouteUrl) {
                    if (previousFragment || currentFragment) {
                        return;
                    }
                }

                this.scrollToPosition(0);
            });

        this.$routeEventsRecognized = this.router.events
            .pipe(filter((evt: any) => evt instanceof RoutesRecognized))
            .subscribe((events: RoutesRecognized) => {
                const currentUrl = events.url;
                const urlFragments: string[] = currentUrl.split('/');

                urlFragments[1] = urlFragments[1] === 'blog' ? 'articles' :
                    urlFragments[1] === 'portfolio' ? 'projects' : urlFragments[1];

                if (currentUrl.includes('/blog/')) {
                    if (urlFragments.length > 2) {
                        const title = linksFromOldSite[urlFragments[2] as keyof typeof linksFromOldSite];
                        if (title) {
                            urlFragments[2] = title;
                        }
                    }
                    this.router.navigateByUrl(urlFragments.join('/'), { replaceUrl: true });
                    return;
                }

                if (currentUrl.includes('/portfolio/')) {
                    if (urlFragments.length > 2) {
                        urlFragments[2] = titleRefactoring(urlFragments[2]);
                    }
                    this.router.navigateByUrl(urlFragments.join('/'), { replaceUrl: true });
                    return;
                }

                if (currentUrl.includes('/all-vacancies/')) {
                    this.router.navigateByUrl('/careers', { replaceUrl: true });
                    return;
                }

                if (currentUrl.includes('/persons/')) {
                    this.router.navigateByUrl('/', { replaceUrl: true });
                    return;
                }
            });
    }

    ngOnDestroy() {
        this.$routeEvents?.unsubscribe();
        this.$routerEventNavigationEnd?.unsubscribe();
        this.$routeEventsRecognized?.unsubscribe();
    }
}
