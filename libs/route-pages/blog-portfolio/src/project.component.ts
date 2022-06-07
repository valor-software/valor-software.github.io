import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { IPortfolio, GetPortfolioService } from "@valor-software/portfolio";
import { Subscription } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { DomSanitizer } from '@angular/platform-browser';
import { titleRefactoring } from "@valor-software/common-docs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'project',
    templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnDestroy{
    changeBreadCrumbTitle?: {path: string, title: string}[];
    project?: IPortfolio;
    $routEvents?: Subscription;
    nextProject?: IPortfolio;

    constructor(
        private router: Router,
        private getProjectsServ: GetPortfolioService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef,

    ) {
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.checkRoutePath();
        });

        if (!this.project) {
            this.checkRoutePath();
        }
    }

    checkRoutePath() {
        const artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
        if (!artTitle) {
            this.router.navigate(['/projects']);
        }

        if (artTitle) {
            const index = this.getProjectsServ.getTitleIndex(artTitle);
            if (!index) {
                this.router.navigate(['/projects']);
                return;
            }

            this.getProjectsServ.getPortfolioRequest(index?.toString()).subscribe((res: IPortfolio) => {
                this.changeBreadCrumbTitle = [{
                    path: artTitle,
                    title: res.name
                }];
                this.project = res;
                this.initNextProject();
            }, error => {
                console.log('error', error);
                this.router.navigate(['/projects']);
            });
        }
    }

    getSafeUrl(url?: string) {
        if (!url) {
            return '';
        };

        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    initNextProject() {
        let index = this.getProjectsServ.getTitleIndex(this.router.parseUrl(this.router.url).root.children.primary.segments[1].path);
        if (!index && index !== 0) {
            return;
        }

        const projectList = this.getProjectsServ.getRefactoredList();
        index--;
        if (index === 0 && projectList?.length) {
            index = projectList?.length;
        }

        this.getProjectsServ.getPortfolioRequest(index.toString()).subscribe(res => {
            this.nextProject = res;
        });
    }

    route(link: string) {
        this.router.navigate(['projects', titleRefactoring(link)]);
    }

    getRespSrc(link: string): string {
        const arr = link.split('.');
        return `${arr[0]}_resp.${arr[1]}`;
    }

    changeSrc(event: Event, link:string) {
        (event.target as HTMLImageElement).src = link;
        this.cdr.detectChanges();
    }

    checkLength(arr: Array<any>, number:number): boolean {
        return arr?.length > number;
    }

    ngOnDestroy() {
        this.$routEvents?.unsubscribe();
    }
}