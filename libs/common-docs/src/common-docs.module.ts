import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './components/popover/popover.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { ImgHoverDirective } from './directives/img-hover.directive';
import { ContactModalComponent } from "./components/contact-modal/contactModal.components";
import { ModalService } from "./services/modal.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FileUploaderModule } from '@valor-software/file-uploader';
import { SendEmailService } from './services/senEmail.service';
import { ResultModalComponent } from './components/result-modal/result-modal.component';
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { ServicesBlockComponent } from './components/services_block/services-block.component';
import { BreadCrumbsComponent } from './components/breadCrumbs/breadCrumbs.component';
import { ShowHideDirective } from './directives/showHide.directive';
import { SwiperModule } from "swiper/angular";
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { BlogItemComponent } from './components/blog-preview/blog-item.component';
import { GetArticlesService } from './services/getArticles.service';
import { ArticlesRouteService } from './services/articlesRoute.service';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';


export { PopoverComponent } from './components/popover/popover.component';
export { TopMenuComponent } from './components/top-menu/top-menu.component';
export { ImgHoverDirective } from './directives/img-hover.directive';
export { AppFooterComponent } from "./components/app-footer/app-footer.component";
export { ServicesBlockComponent } from './components/services_block/services-block.component';
export { ContactModalComponent } from "./components/contact-modal/contactModal.components";
export { ModalService } from './services/modal.service';
export { BreadCrumbsComponent } from './components/breadCrumbs/breadCrumbs.component';
export { ShowHideDirective } from './directives/showHide.directive';
export { GetArticlesService } from './services/getArticles.service';
export { ArticlesRouteService } from './services/articlesRoute.service';
export { IArticle } from './models/article.interface';
export { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
export { BlogItemComponent } from './components/blog-preview/blog-item.component';
export { ARTICLES_LIST } from './tokens/articlesList.token';

@NgModule({
  declarations: [
    PopoverComponent,
    TopMenuComponent,
    ImgHoverDirective,
    ContactModalComponent,
    ResultModalComponent,
    AppFooterComponent,
    ServicesBlockComponent,
    BreadCrumbsComponent,
    ShowHideDirective,
    BlogPreviewComponent,
    BlogItemComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule, FileUploaderModule, SwiperModule, RecaptchaV3Module],
  exports: [
    TopMenuComponent,
    ImgHoverDirective,
    PopoverComponent,
    AppFooterComponent,
    ServicesBlockComponent,
    BreadCrumbsComponent,
    ShowHideDirective,
    BlogPreviewComponent,
    BlogItemComponent
  ],
  providers: [ModalService, SendEmailService, ArticlesRouteService, GetArticlesService,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6LctnKQdAAAAABGStzrEdBnCWVYwkqAafI7pcUz3',
    }
  ]
})
export class CommonDocsModule {}
