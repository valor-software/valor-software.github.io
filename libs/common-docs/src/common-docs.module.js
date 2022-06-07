"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonDocsModule = exports.checkHTMLExtension = exports.blogTitleRefactoring = exports.CustomSlicePipe = exports.SeoService = exports.ARTICLES_LIST = exports.BlogPortfolioItemComponent = exports.BlogPreviewComponent = exports.ArticlesRouteService = exports.GetArticlesService = exports.ShowHideDirective = exports.BreadCrumbsComponent = exports.ModalService = exports.ContactModalComponent = exports.ServicesBlockComponent = exports.AppFooterComponent = exports.ImgHoverDirective = exports.TopMenuComponent = exports.PopoverComponent = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const popover_component_1 = require("./components/popover/popover.component");
const top_menu_component_1 = require("./components/top-menu/top-menu.component");
const router_1 = require("@angular/router");
const img_hover_directive_1 = require("./directives/img-hover.directive");
const contactModal_components_1 = require("./components/contact-modal/contactModal.components");
const modal_service_1 = require("./services/modal.service");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const file_uploader_1 = require("@valor-software/file-uploader");
const senEmail_service_1 = require("./services/senEmail.service");
const result_modal_component_1 = require("./components/result-modal/result-modal.component");
const app_footer_component_1 = require("./components/app-footer/app-footer.component");
const services_block_component_1 = require("./components/services_block/services-block.component");
const breadCrumbs_component_1 = require("./components/breadCrumbs/breadCrumbs.component");
const showHide_directive_1 = require("./directives/showHide.directive");
const angular_1 = require("swiper_angular");
const blog_preview_component_1 = require("./components/blog-preview/blog-preview.component");
const blog_portfolio_item_component_1 = require("./components/blog-preview/blog-portfolio-item.component");
const getArticles_service_1 = require("./services/getArticles.service");
const articlesRoute_service_1 = require("./services/articlesRoute.service");
const ng_recaptcha_1 = require("ng-recaptcha");
const portfolio_1 = require("@valor-software/portfolio");
const customSlice_pipe_1 = require("./pipes/customSlice.pipe");
var popover_component_2 = require("./components/popover/popover.component");
Object.defineProperty(exports, "PopoverComponent", { enumerable: true, get: function () { return popover_component_2.PopoverComponent; } });
var top_menu_component_2 = require("./components/top-menu/top-menu.component");
Object.defineProperty(exports, "TopMenuComponent", { enumerable: true, get: function () { return top_menu_component_2.TopMenuComponent; } });
var img_hover_directive_2 = require("./directives/img-hover.directive");
Object.defineProperty(exports, "ImgHoverDirective", { enumerable: true, get: function () { return img_hover_directive_2.ImgHoverDirective; } });
var app_footer_component_2 = require("./components/app-footer/app-footer.component");
Object.defineProperty(exports, "AppFooterComponent", { enumerable: true, get: function () { return app_footer_component_2.AppFooterComponent; } });
var services_block_component_2 = require("./components/services_block/services-block.component");
Object.defineProperty(exports, "ServicesBlockComponent", { enumerable: true, get: function () { return services_block_component_2.ServicesBlockComponent; } });
var contactModal_components_2 = require("./components/contact-modal/contactModal.components");
Object.defineProperty(exports, "ContactModalComponent", { enumerable: true, get: function () { return contactModal_components_2.ContactModalComponent; } });
var modal_service_2 = require("./services/modal.service");
Object.defineProperty(exports, "ModalService", { enumerable: true, get: function () { return modal_service_2.ModalService; } });
var breadCrumbs_component_2 = require("./components/breadCrumbs/breadCrumbs.component");
Object.defineProperty(exports, "BreadCrumbsComponent", { enumerable: true, get: function () { return breadCrumbs_component_2.BreadCrumbsComponent; } });
var showHide_directive_2 = require("./directives/showHide.directive");
Object.defineProperty(exports, "ShowHideDirective", { enumerable: true, get: function () { return showHide_directive_2.ShowHideDirective; } });
var getArticles_service_2 = require("./services/getArticles.service");
Object.defineProperty(exports, "GetArticlesService", { enumerable: true, get: function () { return getArticles_service_2.GetArticlesService; } });
var articlesRoute_service_2 = require("./services/articlesRoute.service");
Object.defineProperty(exports, "ArticlesRouteService", { enumerable: true, get: function () { return articlesRoute_service_2.ArticlesRouteService; } });
var blog_preview_component_2 = require("./components/blog-preview/blog-preview.component");
Object.defineProperty(exports, "BlogPreviewComponent", { enumerable: true, get: function () { return blog_preview_component_2.BlogPreviewComponent; } });
var blog_portfolio_item_component_2 = require("./components/blog-preview/blog-portfolio-item.component");
Object.defineProperty(exports, "BlogPortfolioItemComponent", { enumerable: true, get: function () { return blog_portfolio_item_component_2.BlogPortfolioItemComponent; } });
var articlesList_token_1 = require("./tokens/articlesList.token");
Object.defineProperty(exports, "ARTICLES_LIST", { enumerable: true, get: function () { return articlesList_token_1.ARTICLES_LIST; } });
var seo_service_1 = require("./services/seo.service");
Object.defineProperty(exports, "SeoService", { enumerable: true, get: function () { return seo_service_1.SeoService; } });
var customSlice_pipe_2 = require("./pipes/customSlice.pipe");
Object.defineProperty(exports, "CustomSlicePipe", { enumerable: true, get: function () { return customSlice_pipe_2.CustomSlicePipe; } });
var titleRefactoringUtil_1 = require("./utils/titleRefactoringUtil");
Object.defineProperty(exports, "blogTitleRefactoring", { enumerable: true, get: function () { return titleRefactoringUtil_1.blogTitleRefactoring; } });
Object.defineProperty(exports, "checkHTMLExtension", { enumerable: true, get: function () { return titleRefactoringUtil_1.checkHTMLExtension; } });
let CommonDocsModule = class CommonDocsModule {
};
CommonDocsModule = __decorate([
    core_1.NgModule({
        declarations: [
            popover_component_1.PopoverComponent,
            top_menu_component_1.TopMenuComponent,
            img_hover_directive_1.ImgHoverDirective,
            contactModal_components_1.ContactModalComponent,
            result_modal_component_1.ResultModalComponent,
            app_footer_component_1.AppFooterComponent,
            services_block_component_1.ServicesBlockComponent,
            breadCrumbs_component_1.BreadCrumbsComponent,
            showHide_directive_1.ShowHideDirective,
            blog_preview_component_1.BlogPreviewComponent,
            blog_portfolio_item_component_1.BlogPortfolioItemComponent,
            customSlice_pipe_1.CustomSlicePipe
        ],
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.ReactiveFormsModule, http_1.HttpClientModule, file_uploader_1.FileUploaderModule, angular_1.SwiperModule, ng_recaptcha_1.RecaptchaV3Module],
        exports: [
            top_menu_component_1.TopMenuComponent,
            img_hover_directive_1.ImgHoverDirective,
            popover_component_1.PopoverComponent,
            app_footer_component_1.AppFooterComponent,
            services_block_component_1.ServicesBlockComponent,
            breadCrumbs_component_1.BreadCrumbsComponent,
            showHide_directive_1.ShowHideDirective,
            blog_preview_component_1.BlogPreviewComponent,
            blog_portfolio_item_component_1.BlogPortfolioItemComponent,
            customSlice_pipe_1.CustomSlicePipe
        ],
        providers: [modal_service_1.ModalService, senEmail_service_1.SendEmailService, articlesRoute_service_1.ArticlesRouteService, getArticles_service_1.GetArticlesService, portfolio_1.GetPortfolioService,
            {
                provide: ng_recaptcha_1.RECAPTCHA_V3_SITE_KEY,
                useValue: '6LctnKQdAAAAABGStzrEdBnCWVYwkqAafI7pcUz3',
            }
        ]
    })
], CommonDocsModule);
exports.CommonDocsModule = CommonDocsModule;
//# sourceMappingURL=common-docs.module.js.map