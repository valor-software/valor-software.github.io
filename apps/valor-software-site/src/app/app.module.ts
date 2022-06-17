import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CommonDocsModule, ARTICLES_LIST, SeoService, PORTFOLIO_LIST } from '@valor-software/common-docs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { articlesList } from "../assets/blog/articles.list";
import { portfolioList } from "../assets/portfolio/portfolio.list";
import { NotFoundComponent } from './404.component';

@NgModule({
  declarations: [
      AppComponent,
      NotFoundComponent
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
    { provide: PORTFOLIO_LIST, useValue: portfolioList },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
