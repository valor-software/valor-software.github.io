import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {forkJoin, Subscription} from "rxjs";
import { IPortfolio, GetPortfolioService, ProjectsRouteService } from "@valor-software/portfolio";
import {Router} from "@angular/router";

const SortList = {
    all_projects: 'All Projects',
    web: 'web',
    mobile: 'Mobile',
    ui: 'UI/UX',
    migration: 'Migration',
    art_intel: 'Artificial Intelligence'
};

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'projects-block',
    templateUrl: './projects-block.component.html'
})
export class ProjectsBlockComponent implements OnDestroy{
    sortList?: string[];
    $portfolio?: Subscription;
    projects?: IPortfolio[];
    sortProjects?: IPortfolio[] = [];
    activeIndex: string[] = ['all_projects'];
    showAll = false;

    constructor(
        private router: Router,
        private getPortfolio: GetPortfolioService,
        private cdr: ChangeDetectorRef,
        private routeProject: ProjectsRouteService
    ) {
        this.$portfolio = forkJoin(this.getPortfolio.getFullListOfPortfolio()).subscribe((res: IPortfolio[] | undefined) => {
            this.projects = res;
            this.sortProjects = res;
        });

        this.getSortKeys();
    }

    getSortKeys() {
        const sortSet = new Set<string>();
        Object.keys(SortList).map(key => sortSet.add(key));
        this.sortList = [...sortSet];
    }

    getSortTitle(key: string) {
        const resKey = key as keyof typeof SortList;
        return SortList[resKey];
    }

    toggleActiveIndex(key: string) {
        if (this.activeIndex.includes(key)) {
            this.activeIndex = this.activeIndex.filter(item => item !== key);
            if (!this.activeIndex.length) {
                this.resetAll();
            }

            this.showAll = false;
            return;
        }

        if (key) {
            this.activeIndex = this.activeIndex.filter(item => item !== 'all_projects');
        }

        this.activeIndex = [...this.activeIndex, key];
        this.showAll = false;
    }

    resetAll() {
        this.activeIndex = ['all_projects'];
    }

    checkLength(): boolean {
        return !!(this.sortProjects?.length && this.sortProjects?.length > 8);
    }

    route(title: string) {
        this.routeProject.route(title);
    }

    updateProjects(projects: IPortfolio[]) {
        this.sortProjects = projects;
        this.cdr.detectChanges();
    }

    ngOnDestroy() {
        this.$portfolio?.unsubscribe();
    }
}