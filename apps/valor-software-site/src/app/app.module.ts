import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CommonDocsModule, ARTICLES_LIST, ARTICLES_REFACTORED_TITLE_LIST, SeoService, OLD_ROUTES_FROM_OLD_SITE } from '@valor-software/common-docs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { articlesList, articlesRefactoringTitlesList } from "../assets/articles/articlesList";
import { PORTFOLIO_LIST } from "@valor-software/portfolio";
import { projectsList } from "../assets/portfolio/portfolio.list";
import { linksFromOldSite } from "../assets/articles/brokenRoutes";

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'}),
    CommonDocsModule,
    BrowserAnimationsModule,
    ScullyLibModule
  ],
  providers: [
    SeoService,
    { provide: ARTICLES_LIST, useValue: articlesList },
    { provide: ARTICLES_REFACTORED_TITLE_LIST, useValue: articlesRefactoringTitlesList },
    { provide: PORTFOLIO_LIST, useValue: projectsList },
    { provide: OLD_ROUTES_FROM_OLD_SITE, useValue: linksFromOldSite },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
