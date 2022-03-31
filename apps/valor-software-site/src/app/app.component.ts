import { AfterContentInit, Component, Inject, HostListener } from '@angular/core';
import { SeoService } from "@valor-software/common-docs";
import {NavigationEnd, NavigationStart, Router, RoutesRecognized} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {filter, pairwise} from "rxjs/operators";


@Component({
  selector: 'valor-software-site-base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit{
    title = 'valor-software-site';
    scrollPosition = 0;

    @HostListener('window:beforeunload') private onReload() {
        window.sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }

  constructor(
      private seo: SeoService,
      private router: Router,
      @Inject(DOCUMENT) private document: any
  ) {
        let scrollItem = window.sessionStorage.getItem('scrollPosition');
        this.scrollPosition = scrollItem || scrollItem == '0' ? Number(scrollItem) : 0;
  }

    scrollToPosition(value: number) {
        setTimeout(() => {
            window.scrollTo(0, value);
            console.log(value);
            window.sessionStorage.removeItem('scrollPosition');
        }, 50);
    }

  ngAfterContentInit() {
        setTimeout(() => {
            if (this.scrollPosition) {
                this.scrollToPosition(this.scrollPosition);
                console.log(this.scrollPosition);
            }
        }, 100)

    // this.router.events
    //     .pipe(
    //         // filter(startEvent => startEvent instanceof NavigationStart),
    //         filter(event => event instanceof NavigationEnd || event instanceof NavigationStart)
    //         // map(event => event instanceof NavigationEnd || event instanceof NavigationStart)
    //     )
    //     // .subscribe(() => setTimeout(() => {
    //     //   console.log(startEvent);
    //     //   const hash = this.router.parseUrl(this.router.url).fragment;
    //     //   if (hash) {
    //     //     //todo logic for router with fragment
    //     //   } else {
    //     //     window.scrollTo(0,0);
    //     //   }
    //     // }, 50));
    //     .subscribe((event) => {
    //       console.log(event);
    //     })


    this.router.events
        .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
        .subscribe((events: RoutesRecognized[]) => {
            const previousUrl = events[0].urlAfterRedirects;
            const currentUrl = events[1].urlAfterRedirects;
            if (previousUrl === currentUrl) {
                // this.scrollToPosition(scrollPosition);
                return;
            }

            const previousFragment = this.router.parseUrl(events[0].urlAfterRedirects).fragment;
            const currentFragment = this.router.parseUrl(events[1].urlAfterRedirects).fragment;
            const previousRouteUrl = this.router.parseUrl(events[0].urlAfterRedirects).root.children["primary"]?.segments[0].path;
            const currentRouteUrl = this.router.parseUrl(events[1].urlAfterRedirects).root.children["primary"]?.segments[0].path;
            if (previousUrl !== currentUrl && previousRouteUrl === currentRouteUrl) {
                if (previousFragment || currentFragment) {
                    // this.scrollToPosition(scrollPosition);
                    return;
                }
            }

            this.scrollToPosition(0);
        });
  }
}
