import {ChangeDetectorRef, Component, Input } from '@angular/core';
import { IPortfolio } from "@valor-software/portfolio";
import { Router } from "@angular/router";
import { titleRefactoring } from "@valor-software/common-docs";

const SortList = {
    all_projects: 'All Projects',
    web: 'Web',
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
export class ProjectsBlockComponent {
    sortList?: string[];
    projects?: IPortfolio[];
    sortProjects?: IPortfolio[] = [];
    activeIndex: string[] = ['all_projects'];
    showAll = false;

    @Input() set _projects (value: IPortfolio[]) {
        this.projects = Object.assign(value);
        this.updateProjects(value);
    }

    constructor(
        private router: Router,
        private cdr: ChangeDetectorRef,
    ) {
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
        this.router.navigate(['projects', titleRefactoring(title)]);
    }

    updateProjects(projects: IPortfolio[]) {
        if (projects) {
            this.sortProjects = Object.assign(projects);
            this.cdr.detectChanges();
        }
    }
}