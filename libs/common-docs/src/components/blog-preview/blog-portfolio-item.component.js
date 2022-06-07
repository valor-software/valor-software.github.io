"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPortfolioItemComponent = void 0;
const core_1 = require("@angular/core");
let BlogPortfolioItemComponent = class BlogPortfolioItemComponent {
};
__decorate([
    core_1.Input()
], BlogPortfolioItemComponent.prototype, "article", void 0);
__decorate([
    core_1.Input()
], BlogPortfolioItemComponent.prototype, "project", void 0);
BlogPortfolioItemComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'blog-portfolio-item',
        template: `
        <div class="article-item">
            <div class="img-container zoom-img-scale">
                <img class="w-full h-full object-cover" [src]="article ? article?.bgImg : project?.previewImg" [alt]="article ? article?.title : project?.name + 'img'">
            </div>
            <div class="text-container">
                <p>{{article ? article?.title : project?.name}}</p>
            </div>
        </div>
    `
    })
], BlogPortfolioItemComponent);
exports.BlogPortfolioItemComponent = BlogPortfolioItemComponent;
//# sourceMappingURL=blog-portfolio-item.component.js.map