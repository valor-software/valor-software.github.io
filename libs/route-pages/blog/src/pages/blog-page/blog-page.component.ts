import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { forkJoin, Subscription } from 'rxjs';
import { GetArticlesService, IArticle, titleRefactoring } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { FormControl } from '@angular/forms';
import { Domains } from '../../models';

SwiperCore.use([Pagination]);

interface GroupedArticles {
	tag: string;
	articles: IArticle[];
}

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'blog-page',
	templateUrl: './blog-page.component.html',
	styleUrls: ['./blog-page.component.scss']
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

	groupedAndFilteredArticles: GroupedArticles[] = [];
	searchTermControl = new FormControl('');

	constructor(
		private readonly router: Router,
		private readonly getArticlesServ: GetArticlesService,
	) {
		this.$generalSubscription.add(
			this.router.events.pipe(
				filter(event => event instanceof NavigationEnd)
			).subscribe(event => {
				this.routeUrl = this.router.parseUrl(this.router.url).root.children['primary']?.segments[0].path;
				this._initObserveFullListOfArticles();
			}));
	}

	getRouteLink(link: string): any {
		return titleRefactoring(link);
	}

	navigateToArticle(title: string): void {
		this.router.navigate(['..', 'articles', this.getRouteLink(title)]);
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
					this._observeSearchValueChanges();
				}
			})
		);
	}

	private getFirstProjects<Type>(value: Type[]): Type[] {
		return value.slice(0, 4);
	}

	private filterFirstItems() {
		if (this.activeArticle) {
			this.firstArticles = this.firstArticles?.filter(item => item !== this.activeArticle);
		}
	}

	private _filterAndGroupArticles(articles: IArticle[], searchTerm: string): GroupedArticles[] {
		if (!searchTerm || searchTerm.length === 0) {
			return [];
		}

		const filteredArticles = articles.filter(article =>
			article.title.toLowerCase().includes(searchTerm?.toLowerCase())
		);
		const groupedByTag: Map<string, IArticle[]> = new Map();

		filteredArticles.forEach(article => {
			article.domains.forEach(domain => {
				const existingArticles = groupedByTag.get(domain) || [];
				groupedByTag.set(domain, [...existingArticles, article]);
			});
		});

		return Array.from(groupedByTag.entries()).map(
			([tag, articles]) => ({
				tag: Domains[tag] || tag,
				articles
			})
		);
	}

	private _observeSearchValueChanges(): void {
		this.$generalSubscription.add(
			this.searchTermControl.valueChanges.pipe(
				map(term => {
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					this.groupedAndFilteredArticles = this._filterAndGroupArticles(this.articles, term!);
				})
			).subscribe()
		);
	}
}