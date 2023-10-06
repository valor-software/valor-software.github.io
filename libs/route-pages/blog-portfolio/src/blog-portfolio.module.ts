import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { GeneralPageComponent } from './general-page.component';
import { CommonDocsModule } from '@valor-software/common-docs';
import { BlogComponent, ProjectsBlockComponent, ArticleComponent, ProjectComponent } from './components';
import { SortDirective } from './directives/sort.directive';
import { GeneralItemComponent } from './general-item.component';
import { FeedbackModule } from '@valor-software/feedback';
import { SwiperModule } from 'swiper/angular';

@NgModule({
	declarations: [
		GeneralPageComponent,
		BlogComponent,
		ProjectsBlockComponent,
		SortDirective,
		GeneralItemComponent,
		ArticleComponent,
		ProjectComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CommonDocsModule,
		FeedbackModule,
		SwiperModule
	]
})
export class BlogPortfolioModule {
}
        