import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CommonDocsModule, ARTICLES_LIST } from '@valor-software/common-docs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ArticlesList } from "../assets/blog/articles.list";
import { PORTFOLIO_LIST } from "@valor-software/portfolio";
import { PortfolioList } from "../assets/portfolio/portfolio.list";


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
    { provide: ARTICLES_LIST, useValue: ArticlesList },
    { provide: PORTFOLIO_LIST, useValue: PortfolioList }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
