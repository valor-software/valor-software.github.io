import { Component, OnDestroy, Type } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { forkJoin, Subscription } from 'rxjs';
import {
	GetArticlesService,
	IArticle,
	GetPortfolioService,
	IPortfolio,
	titleRefactoring
} from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

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
export class GeneralPageComponent implements OnDestroy {
	routeUrl = '';
	$generalSubscription = new Subscription();
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
		private readonly router: Router,
		private readonly getArticlesServ: GetArticlesService,
		private readonly getPortfolio: GetPortfolioService,
	) {
		this.$generalSubscription.add(
			this.router.events.pipe(
				filter(event => event instanceof NavigationEnd)
			).subscribe(event => {
				this.routeUrl = this.router.parseUrl(this.router.url).root.children['primary']?.segments[0].path;

				this.isBlogPage()
					? this._initObserveFullListOfArticles()
					: this._initObserveFullListOfPortfolio();
			}));
	}

	isBlogPage() {
		return this.routeUrl === generalPaths.BLOG;
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

		if (this.activeProject) {
			this.firstProjects = this.firstProjects?.filter(item => item !== this.activeProject);
		}
	}

	ngOnDestroy() {
		this.$generalSubscription.unsubscribe();
	}

	private _initObserveFullListOfPortfolio() {
		this.$generalSubscription.add(
			forkJoin(
				this.getPortfolio.getFullListOfPortfolio()
			).subscribe((res?: IPortfolio[]) => {
				if (res) {
					this.projects = Object.assign(res);
					this.firstProjects = this.getFirstProjects(res);
					this.activeProject = this.firstProjects[0];
					this.filterFirstItems();
				}
			})
		);
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