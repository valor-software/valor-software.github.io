import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './components/popover/popover.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { ContactModalComponent } from './components/contact-modal/contact-modal.components';
import { ModalService } from './services/modal.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploaderModule } from '@valor-software/file-uploader';
import { SendEmailService } from './services/send-email.service';
import { ResultModalComponent } from './components/result-modal/result-modal.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ServicesBlockComponent } from './components/services_block/services-block.component';
import { BreadCrumbsComponent } from './components/breadCrumbs/breadCrumbs.component';
import { ShowHideDirective, ImgHoverDirective, SortDirective } from './directives';
import { SwiperModule } from 'swiper/angular';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { BlogPortfolioItemComponent } from './components/blog-preview/blog-portfolio-item.component';
import { GetArticlesService } from './services/getArticles.service';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { GetPortfolioService } from './services/getPortfolio.service';
import { CustomSlicePipe } from './pipes/customSlice.pipe';
import { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';
import { ComparisonSliderComponent } from './components/comparison-slider/comparison-slider.component';
import { NextProjectComponent } from './components/next-project/next-project.component';
import { ImpactCardComponent } from './components/impact-card/impact-card.component';
import { ChallengeCardComponent } from './components/challenge-card/challenge-card.component';
import { UtilService } from './services/utils.service';
import { TechnologiesCardComponent } from './components/technologies-card/technologies-card.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { CookieConsentBannerComponent } from './components/cookie-consent-banner/cookie-consent-banner.component';
import { MatSelectModule } from '@angular/material/select';

export { PopoverComponent } from './components/popover/popover.component';
export { TopMenuComponent } from './components/top-menu/top-menu.component';
export { ShowHideDirective, ImgHoverDirective, SortDirective } from './directives';
export { AppFooterComponent } from './components/app-footer/app-footer.component';
export { ServicesBlockComponent } from './components/services_block/services-block.component';
export { ContactModalComponent } from './components/contact-modal/contact-modal.components';
export { ModalService } from './services/modal.service';
export { BreadCrumbsComponent } from './components/breadCrumbs/breadCrumbs.component';
export { GetArticlesService } from './services/getArticles.service';
export { IArticle } from './models/article.interface';
export { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
export { BlogPortfolioItemComponent } from './components/blog-preview/blog-portfolio-item.component';
export { ARTICLES_LIST, ARTICLES_REFACTORED_TITLE_LIST } from './tokens/articlesList.token';
export { SeoService } from './services/seo.service';
export { CustomSlicePipe } from './pipes/customSlice.pipe';
export { PORTFOLIO_LIST } from './tokens/portfolioList.token';
export { IPortfolio } from './models/portfolio.interface';
export { GetPortfolioService } from './services/getPortfolio.service';
export { titleRefactoring, checkHTMLExtension } from './utils/titleRefactoringUtil';
export { OLD_ROUTES_FROM_OLD_SITE } from './tokens/linksFromOldSite.token';
export { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';
export { IExpandableCard } from './components/expandable-card/expandable-card.component';
export { ComparisonSliderComponent } from './components/comparison-slider/comparison-slider.component';
export { NextProjectComponent } from './components/next-project/next-project.component';
export { ImpactCardComponent } from './components/impact-card/impact-card.component';
export { ChallengeCardComponent } from './components/challenge-card/challenge-card.component';
export { IChallengeCard } from './components/challenge-card/challenge-card.component';
export { TechnologiesCardComponent } from './components/technologies-card/technologies-card.component';
export { ITechnologiesCard } from './components/technologies-card/technologies-card.component';
export { UtilService } from './services/utils.service';
export { technologiesAndServices } from './components/technologies/technologies-and-services';
export { CookieConsentBannerComponent } from './components/cookie-consent-banner/cookie-consent-banner.component';

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
		BlogPortfolioItemComponent,
		CustomSlicePipe,
		NextProjectComponent,
		ExpandableCardComponent,
		ComparisonSliderComponent,
		ImpactCardComponent,
		ChallengeCardComponent,
		TechnologiesCardComponent,
		TechnologiesComponent,
		CookieConsentBannerComponent,
		SortDirective
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		HttpClientModule,
		FileUploaderModule,
		SwiperModule,
		RecaptchaV3Module,
		MatSelectModule
	],
	exports: [
		TopMenuComponent,
		ImgHoverDirective,
		PopoverComponent,
		AppFooterComponent,
		ServicesBlockComponent,
		BreadCrumbsComponent,
		ShowHideDirective,
		BlogPreviewComponent,
		BlogPortfolioItemComponent,
		CustomSlicePipe,
		NextProjectComponent,
		ExpandableCardComponent,
		ComparisonSliderComponent,
		ImpactCardComponent,
		ChallengeCardComponent,
		TechnologiesCardComponent,
		TechnologiesComponent,
		CookieConsentBannerComponent,
		SortDirective
	],
	providers: [
		ModalService,
		SendEmailService,
		GetArticlesService,
		GetPortfolioService,
		UtilService,
		{
			provide: RECAPTCHA_V3_SITE_KEY,
			useValue: '6LctnKQdAAAAABGStzrEdBnCWVYwkqAafI7pcUz3',
		}
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonDocsModule {
}
