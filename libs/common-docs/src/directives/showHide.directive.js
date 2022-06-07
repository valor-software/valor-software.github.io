"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowHideDirective = void 0;
const core_1 = require("@angular/core");
const collapse_animations_1 = require("./collapse-animations");
let ShowHideDirective = class ShowHideDirective {
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        this.partlyClose = false;
        this.isExpanded = true;
        this.collapseNewValue = true;
        this.isCollapsed = false;
        this.isCollapse = true;
        this.isCollapsing = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._PARTLY_CLOSE_ACTION_NAME = 'partlyCollapsed';
        this._factoryCollapseAnimation = _builder.build(collapse_animations_1.collapseAnimation);
        this._factoryExpandAnimation = _builder.build(collapse_animations_1.expandAnimation);
    }
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    get collapse() {
        return this.isExpanded;
    }
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this._isAnimationDone = false;
        this.animationRun(this.partlyClose ? this._PARTLY_CLOSE_ACTION_NAME : this._COLLAPSE_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed) {
                this.show();
                return;
            }
            this._renderer.setStyle(this._el.nativeElement, 'display', this.partlyClose ? this._display : 'none');
        });
    }
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this._isAnimationDone = false;
        this.animationRun(this._EXPAND_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed) {
                this.hide();
                return;
            }
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        });
    }
    animationRun(action) {
        if (!this._stylesLoaded) {
            return (callback) => callback();
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (callback) => { var _a; return (_a = this._player) === null || _a === void 0 ? void 0 : _a.onDone(callback); };
    }
};
__decorate([
    core_1.Input()
], ShowHideDirective.prototype, "collapse", null);
__decorate([
    core_1.Input()
], ShowHideDirective.prototype, "partlyClose", void 0);
__decorate([
    core_1.HostBinding('class.in'),
    core_1.HostBinding('class.show')
], ShowHideDirective.prototype, "isExpanded", void 0);
__decorate([
    core_1.HostBinding('attr.aria-hidden')
], ShowHideDirective.prototype, "isCollapsed", void 0);
__decorate([
    core_1.HostBinding('class.collapse')
], ShowHideDirective.prototype, "isCollapse", void 0);
__decorate([
    core_1.HostBinding('class.collapsing')
], ShowHideDirective.prototype, "isCollapsing", void 0);
ShowHideDirective = __decorate([
    core_1.Directive({
        // eslint-disable-next-line @angular-eslint/directive-selector
        selector: '[collapse]',
        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
        host: {
            '[class.collapse]': 'true'
        }
    })
], ShowHideDirective);
exports.ShowHideDirective = ShowHideDirective;
//# sourceMappingURL=showHide.directive.js.map