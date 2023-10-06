import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { forkJoin, Subscription } from 'rxjs';
import { GetPortfolioService, IPortfolio, titleRefactoring } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'projects-page',
	templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent implements OnDestroy {
	routeUrl = '';
	$generalSubscription = new Subscription();
	firstProjects: IPortfolio[] = [];
	projects: IPortfolio[] = [];
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
		private readonly getPortfolio: GetPortfolioService,
	) {
		this.$generalSubscription.add(
			this.router.events.pipe(
				filter(event => event instanceof NavigationEnd)
			).subscribe(event => {
				this.routeUrl = this.router.parseUrl(this.router.url).root.children['primary']?.segments[0].path;
				this._initObserveFullListOfProjects();
			}));
	}

	getFirstProjects<Type>(value: Type[]): Type[] {
		return value.slice(0, 4);
	}

	getRouteLink(link: string): any {
		return titleRefactoring(link);
	}

	filterFirstItems() {
		if (this.activeProject) {
			this.firstProjects = this.firstProjects?.filter(item => item !== this.activeProject);
		}
	}

	ngOnDestroy() {
		this.$generalSubscription.unsubscribe();
	}

	private _initObserveFullListOfProjects() {
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
}