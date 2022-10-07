import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { IPortfolio, GetPortfolioService, UtilService } from "@valor-software/common-docs";
import { checkHTMLExtension, titleRefactoring } from "@valor-software/common-docs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'project',
    templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnDestroy {
    changeBreadCrumbTitle?: { path: string, title: string }[];
    project?: IPortfolio;
    $routEvents?: Subscription;

    constructor(
        public utilService: UtilService,
        private router: Router,
        private getProjectsServ: GetPortfolioService,
        private cdr: ChangeDetectorRef
    ) {
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.checkRoutePath();
        });

        if (!this.project) {
            this.checkRoutePath();
        }
    }

    checkRoutePath() {
        let artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
        if (!artTitle) {
            this.router.navigate(['/404']);
        }

        artTitle = checkHTMLExtension(artTitle);
        this.getProjectsServ.getPortfolioRequest(artTitle).subscribe((res: IPortfolio) => {
            this.changeBreadCrumbTitle = [{
                path: this.router.parseUrl(this.router.url).root.children.primary.segments[1].path,
                title: res.name
            }];
            this.project = res;
        }, error => {
            console.log('error', error);
            this.router.navigate(['/404']);
        });
    }

    getRouteLink(link: string): string {
        return titleRefactoring(link);
    }

    getRespSrc(link: string): string {
        const arr = link.split('.');
        return `${arr[0]}_resp.${arr[1]}`;
    }

    changeSrc(event: Event, link: string) {
        (event.target as HTMLImageElement).src = link;
        this.cdr.detectChanges();
    }

    checkLength(arr: Array<any>, number: number): boolean {
        return arr?.length > number;
    }

    ngOnDestroy() {
        this.$routEvents?.unsubscribe();
    }
}