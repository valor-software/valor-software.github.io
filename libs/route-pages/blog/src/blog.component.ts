import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { GetArticlesService } from "./getArticles.service";
import { forkJoin, Subscription } from "rxjs";
import { IArticle } from "./articles.list";
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
export class BlogComponent implements OnDestroy{
    sortList: string[] = [];
    sortLang: string[] =[];
    $articles?: Subscription;
    articles?: IArticle[];
    sortArticles?: IArticle[] = [];
    activeIndex: string[] = ['en'];
    constructor(
        private router: Router,
        private getArticles: GetArticlesService,
        private cdr: ChangeDetectorRef
    ) {
        this.$articles = forkJoin(this.getArticles.getFullListOfArticles()).subscribe((res: IArticle[] | undefined) => {
            this.articles = res;
            this.sortArticles = res;
        });
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
            return;
        }

        this.activeIndex = [...this.activeIndex, key];
        console.log(this.activeIndex);
    }

    updateArticles(articles: IArticle[] | []) {
        this.sortArticles = articles;
        this.cdr.detectChanges();
    }

    resetAll() {
        // const lang = this.activeIndex.includes('pt') ? 'pt' : 'en';
        this.sortArticles = this.articles;
    }

    route(title: string) {
        let link = title;
        while(link.match(' ')) {
            link = link.replace(' ','_');
            link = link.replace(':','');
        }
        this.router.navigate(['blog/article'], {queryParams:{name: link}});
        // let link = 'Career Path for a Flat-structured Сompany';
        // while(link.match(' ')) {
        //     link = link.replace(' ','_');
        //     link = link.replace(':','');
        // }
        // console.log(link);

    }

    ngOnDestroy() {
        this.$articles?.unsubscribe();
    }
}