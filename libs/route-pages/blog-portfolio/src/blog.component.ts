import {ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import { GetArticlesService } from "@valor-software/common-docs";
import { Subscription } from "rxjs";
import { IArticle, BlogArticlesRouteService } from "@valor-software/common-docs";
import { Router } from "@angular/router";

export const Domains = {
    business_analysis: 'Business Analysis',
    user_research_design: 'User Research & Design',
    dev_quality_assurance: 'Development & Quality Assurance',
    devops_cloud: 'DevOps & Cloud',
    recruitment_pm: 'Recruitment & Project Mgmt.',
    sales_marketing: 'Sales & Marketing',
    other: 'Other'
};

export const Languages = {
    en: 'English',
    pt: 'Portuguese'
};

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog-block',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnDestroy {
    sortList: string[] = [];
    sortLang: string[] =[];
    $articles?: Subscription;
    articles?: IArticle[];
    sortArticles?: IArticle[] = [];
    activeIndex: string[] = ['en'];
    showAll = false;
    isCollapsed = true;

    @Input() set _articles (value: IArticle[]) {
        this.articles = Object.assign(value);
        this.sortArticles = Object.assign(value);
    }

    constructor(
        private router: Router,
        private getArticles: GetArticlesService,
        private cdr: ChangeDetectorRef,
        private routeArticle: BlogArticlesRouteService
    ) {
        this.getSortKeys();
    }


    getSortKeys() {
        const sortSet = new Set<string>();
        Object.keys(Domains).map(key => sortSet.add(key));
        this.sortList = [...sortSet];

        const sortLang = new Set<string>();
        Object.keys(Languages).map(key => sortLang.add(key));
        this.sortLang = [...sortLang];
    }

    getDomainTitle(key: string) {
        const resKey = key as keyof typeof Domains;
        return Domains[resKey];
    }

    getLanguageTitle(key: string) {
        const resKey = key as keyof typeof Languages;
        return Languages[resKey];
    }

    toggleActiveIndex(key: string) {
        if (this.activeIndex.includes(key)) {
            this.activeIndex = this.activeIndex.filter(item => item !== key);
            this.showAll = false;
            return;
        }

        this.activeIndex = [...this.activeIndex, key];
        this.showAll = false;
    }

    toggleLanguage(key: string) {
        if (!this.activeIndex.includes(key)) {
            const keys = this.activeIndex.filter(item => item !== 'pt' && item !== 'en');
            this.activeIndex = [...keys, key];
        }

        this.showAll = false;
    }

    updateArticles(articles: IArticle[] | []) {
        this.sortArticles = articles;
        this.cdr.detectChanges();
    }

    resetAll() {
        const lang = this.activeIndex.includes('pt') ? 'pt' : 'en';
        this.activeIndex = [lang];
    }

    getRouteLink(link: string): any {
        return this.routeArticle.getRouteLink(link);
    }

    checkLength(): boolean {
        return !!(this.sortArticles?.length && this.sortArticles?.length > 8);
    }

    ngOnDestroy() {
        this.$articles?.unsubscribe();
    }
}