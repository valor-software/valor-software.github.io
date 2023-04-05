import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { SeoService } from '@valor-software/common-docs';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const notFoundPageUrl = '/404';
declare const gtag: any;
const isCookieAllowed = 'isCookieAllowed';

@Component({
	selector: 'valor-software-site-base-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, AfterViewInit {
	title = 'valor-software-site';
	scrollPosition = 0;
	$routeEvents?: Subscription;
	$gaRouteEvents?: Subscription;
	$routerEventNavigationEnd: Subscription;
	showFooterAndHeader = true;
	showCookieConsentBanner = new BehaviorSubject(!this.cookieService.get(isCookieAllowed));

	@HostListener('window:beforeunload')
	private onReload() {
		window.sessionStorage.setItem('scrollPosition', window.scrollY.toString());
	}

	constructor(
		private seo: SeoService,
		private router: Router,
		private readonly cookieService: CookieService,
	) {
		const scrollItem = window.sessionStorage.getItem('scrollPosition');
		this.scrollPosition = scrollItem || scrollItem == '0' ? Number(scrollItem) : 0;
		this.$routerEventNavigationEnd = router.events.pipe(
			filter(evt => evt instanceof NavigationEnd)
		).subscribe(res => {
			this.showFooterAndHeader = !!(this.router.url === notFoundPageUrl);
		});
	}

	ngAfterViewInit() {
		this.cookieService.get(isCookieAllowed)
			? this.handleGoogleAnalyticsTracking()
			: this.cookieService.deleteAll();

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
				const previousRouteUrl = this.router.parseUrl(events[0].urlAfterRedirects).root.children['primary']?.segments[0].path;
				const currentRouteUrl = this.router.parseUrl(events[1].urlAfterRedirects).root.children['primary']?.segments[0].path;
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
		this.$gaRouteEvents?.unsubscribe();
	}

	onAcceptCookies(): void {
		this.cookieService.set(isCookieAllowed, 'true');
		this.showCookieConsentBanner.next(false);
		/** make navigation to current url to trigger googleAnalytics on current route */
		this.redirectTo(this.router.url);
		this.handleGoogleAnalyticsTracking();
	}

	private scrollToPosition(value: number): void {
		setTimeout(() => {
			window.scrollTo(0, value);
			window.sessionStorage.removeItem('scrollPosition');
		}, 50);
	}

	private handleGoogleAnalyticsTracking(): void {
		let configured = false;
		this.$gaRouteEvents = this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				if (!configured) {
					gtag('config', 'UA-73071494-2', { send_page_view: false });
					configured = true;
				}
				gtag('event', 'page_view', {
					page_location: window.location.href,
					page_path: event.urlAfterRedirects,
				});
			}
		});
	}

	private redirectTo(uri: string): void {
		this.router.navigateByUrl('/', { skipLocationChange: true })
			.then(() => this.router.navigate([uri]));
	}
}
