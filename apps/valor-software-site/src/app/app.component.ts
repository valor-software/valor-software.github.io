import { Component, Inject, HostListener, OnDestroy, AfterViewInit } from '@angular/core';
import { SeoService } from "@valor-software/common-docs";
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, pairwise } from "rxjs/operators";
import { Subscription } from "rxjs";

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
    }

    ngOnDestroy() {
        this.$routeEvents?.unsubscribe();
        this.$routerEventNavigationEnd?.unsubscribe();
    }
}
