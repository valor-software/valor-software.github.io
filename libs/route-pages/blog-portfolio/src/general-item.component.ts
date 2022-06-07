import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { Subscription } from "rxjs";

const generalPaths = {
    BLOG: 'articles',
    PORTFOLIO: 'projects'
};


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'general-item',
    template: `
        <ng-container *ngIf="isBlogPage(); else projectPage">
            <article></article>
        </ng-container>
        <ng-template #projectPage>
            <project></project>
        </ng-template>
    `
})
export class GeneralItemComponent implements OnDestroy {
    $routerEvents: Subscription;
    routeUrl?: string;

    constructor(
        private router: Router,
    ) {
        this.$routerEvents = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(event => {
                this.routeUrl = this.router.parseUrl(this.router.url).root.children["primary"].segments[0].path;
            });
    }

    isBlogPage() {
        return this.routeUrl === generalPaths.BLOG;
    }

    ngOnDestroy() {
        if (this.$routerEvents) {
            this.$routerEvents.unsubscribe();
        }
    }

}