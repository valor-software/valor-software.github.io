import { Component, Inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { forkJoin, Subscription } from 'rxjs';
import { GetArticlesService, IArticle, titleRefactoring, VALOR_ASSETS_URL } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'blog-page',
	templateUrl: './blog-page.component.html'
})
export class BlogPageComponent implements OnDestroy {
	routeUrl = '';
	$generalSubscription = new Subscription();
	articles: IArticle[] = [];
	firstArticles: IArticle[] = [];
	activeArticle?: IArticle;

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
		private readonly router: Router,
		private readonly getArticlesServ: GetArticlesService,
		@Inject(VALOR_ASSETS_URL) public readonly valorAssetsUrl: string,
	) {
		console.log('BlogPageComponent', valorAssetsUrl);
		this.$generalSubscription.add(
			this.router.events.pipe(
				filter(event => event instanceof NavigationEnd)
			).subscribe(event => {
				this.routeUrl = this.router.parseUrl(this.router.url).root.children['primary']?.segments[0].path;
				this._initObserveFullListOfArticles();
			}));
	}

	getFirstProjects<Type>(value: Type[]): Type[] {
		return value.slice(0, 4);
	}

	getRouteLink(link: string): any {
		return titleRefactoring(link);
	}

	filterFirstItems() {
		if (this.activeArticle) {
			this.firstArticles = this.firstArticles?.filter(item => item !== this.activeArticle);
		}
	}

	ngOnDestroy() {
		this.$generalSubscription.unsubscribe();
	}

	private _initObserveFullListOfArticles() {
		this.$generalSubscription.add(
			forkJoin(
				this.getArticlesServ.getFullListOfArticles()
			).subscribe((res?: IArticle[]) => {
				if (res) {
					this.articles = res;
					this.firstArticles = this.getFirstProjects(res);
					this.activeArticle = this.firstArticles[0];
					this.filterFirstItems();
				}
			})
		);
	}
}