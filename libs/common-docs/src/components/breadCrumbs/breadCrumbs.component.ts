import { Component, Input } from '@angular/core';
import { Router, UrlSegment } from "@angular/router";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'breadCrumbs',
    template:`
        <div *ngIf="segments && segments?.length && segments.length > 1">
            <div class="flex text-grey_font_col">
                <p class="underline cursor-pointer" (click)="navigate()">Home</p>
                <ng-container *ngFor="let segment of segments;let i = index">
                    <ng-container *ngIf="segment.title && segment.path">
                        <span>&nbsp;{{'>'}}&nbsp;</span>
                        <p
                                (click)="navigate(i)"
                                [ngClass]="{'disabled': checkDisabled(i), 'underline cursor-pointer': !checkDisabled(i)}"
                        >
                            {{segment.title.toString() | titlecase}}
                        </p>
                    </ng-container>
                </ng-container>
            </div>
        </div>
    `
})
export class BreadCrumbsComponent {
    @Input() set changeTitle(value: {path: string, title: string, excludePath?: boolean}[] | undefined) {
        if (!this.segments?.length || !value?.length) {
            return;
        }

        const segments = this.router.parseUrl(this.router.url).root.children.primary.segments;
        this.initSegments(segments);
        this.segments.map(item => {
           value.map(key => {
                if (key.path === item.path) {
                    item.title = key.title;
                }

                if (key.path === item.path && key.excludePath) {
                    item.title = '';
                    item.path = '';
                }
           });
        });
    };
    segments?: {path: string, title: string}[];

    constructor(
        private router: Router,
    ) {
        const segments = this.router.parseUrl(this.router.url).root.children.primary.segments;
        this.initSegments(segments);
    }

    initSegments(value: UrlSegment[]) {
        this.segments = value.map(item => {
            return {
                path: item.path,
                title: item.path
            };
        });
    }

    navigate(link?: number) {
        if (!this.segments?.length) {
            return;
        }

        if (!link && link !== 0) {
            this.router.navigate(['/']);
            return;
        }

        link++;
        if (link >= this.segments.length) {
            return;
        }

        const arr = this.segments.slice(0, link);
        const url = arr.map(url => url.path);
        this.router.navigate([`/${url.join('/')}`]);
    }

    checkDisabled(index: number) {
        const length = this.segments?.length ? this.segments.length - 1 : false;
        return index === length;
    }

}