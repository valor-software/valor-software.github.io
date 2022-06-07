"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPreviewComponent = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const swiper_1 = __importStar(require("swiper"));
swiper_1.default.use([swiper_1.Pagination]);
let BlogPreviewComponent = class BlogPreviewComponent {
    constructor(getArticles, router) {
        this.getArticles = getArticles;
        this.router = router;
        this.swiperConfig = {
            slidesPerView: 1,
            spaceBetween: 40,
            slideToClickedSlide: true,
            mousewheel: {
                releaseOnEdges: true
            },
            pagination: {
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2
                }
            }
        };
    }
    ngOnInit() {
        var _a, _b;
        if ((_a = this.articlesList) === null || _a === void 0 ? void 0 : _a.length) {
            this.$articles = rxjs_1.forkJoin(this.getArticles.getArticlesByNames(this.articlesList)).subscribe((res) => {
                this.articles = res;
            });
        }
        if (!((_b = this.articlesList) === null || _b === void 0 ? void 0 : _b.length)) {
            this.$articles = rxjs_1.forkJoin(this.getArticles.getPreviewArticle()).subscribe((res) => {
                this.articles = res;
            });
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.$articles) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    route(title) {
        if (!title) {
            return;
        }
        const link = this.getArticles.getRefactoredTitle(title);
        this.router.navigate(['articles', link]);
    }
};
__decorate([
    core_1.Input()
], BlogPreviewComponent.prototype, "articlesList", void 0);
BlogPreviewComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'blog-preview',
        templateUrl: './blog-preview.component.html'
    })
], BlogPreviewComponent);
exports.BlogPreviewComponent = BlogPreviewComponent;
//# sourceMappingURL=blog-preview.component.js.map