"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgHoverDirective = void 0;
const core_1 = require("@angular/core");
let ImgHoverDirective = class ImgHoverDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.activeSrc = '';
        this.defaultSrc = '';
    }
    onMouseLeave() {
        if (!this.defaultSrc || this.check) {
            return;
        }
        ;
        this.elementRef.nativeElement.getElementsByTagName('img')[0].setAttribute('src', this.defaultSrc);
    }
    onMouseOver() {
        if (!this.activeSrc || this.check) {
            return;
        }
        ;
        this.elementRef.nativeElement.getElementsByTagName('img')[0].setAttribute('src', this.activeSrc);
    }
};
__decorate([
    core_1.Input()
], ImgHoverDirective.prototype, "activeSrc", void 0);
__decorate([
    core_1.Input()
], ImgHoverDirective.prototype, "defaultSrc", void 0);
__decorate([
    core_1.Input()
], ImgHoverDirective.prototype, "check", void 0);
__decorate([
    core_1.HostListener('mouseout')
], ImgHoverDirective.prototype, "onMouseLeave", null);
__decorate([
    core_1.HostListener('mouseover')
], ImgHoverDirective.prototype, "onMouseOver", null);
ImgHoverDirective = __decorate([
    core_1.Directive(
    // eslint-disable-next-line @angular-eslint/directive-selector
    { selector: '[changeSrcOnHover]' })
], ImgHoverDirective);
exports.ImgHoverDirective = ImgHoverDirective;
//# sourceMappingURL=img-hover.directive.js.map