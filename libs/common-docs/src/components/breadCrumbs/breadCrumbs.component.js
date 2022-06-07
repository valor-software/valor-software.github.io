"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadCrumbsComponent = void 0;
const core_1 = require("@angular/core");
let BreadCrumbsComponent = class BreadCrumbsComponent {
    constructor(router) {
        this.router = router;
        const segments = this.router.parseUrl(this.router.url).root.children.primary.segments;
        this.initSegments(segments);
    }
    set changeTitle(value) {
        var _a;
        if (!((_a = this.segments) === null || _a === void 0 ? void 0 : _a.length) || !(value === null || value === void 0 ? void 0 : value.length)) {
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
    }
    ;
    initSegments(value) {
        this.segments = value.map(item => {
            return {
                path: item.path,
                title: item.path
            };
        });
    }
    navigate(link) {
        var _a;
        if (!((_a = this.segments) === null || _a === void 0 ? void 0 : _a.length)) {
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
    checkDisabled(index) {
        var _a;
        const length = ((_a = this.segments) === null || _a === void 0 ? void 0 : _a.length) ? this.segments.length - 1 : false;
        return index === length;
    }
};
__decorate([
    core_1.Input()
], BreadCrumbsComponent.prototype, "changeTitle", null);
BreadCrumbsComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'breadCrumbs',
        template: `
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
], BreadCrumbsComponent);
exports.BreadCrumbsComponent = BreadCrumbsComponent;
//# sourceMappingURL=breadCrumbs.component.js.map