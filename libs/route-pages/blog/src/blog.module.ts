import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BlogPageComponent } from './blog-page.component';
import { CommonDocsModule } from '@valor-software/common-docs';
import { BlogComponent, ArticleComponent } from './components';
import { FeedbackModule } from '@valor-software/feedback';
import { SwiperModule } from 'swiper/angular';

@NgModule({
	declarations: [
		BlogPageComponent,
		BlogComponent,
		ArticleComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CommonDocsModule,
		FeedbackModule,
		SwiperModule
	]
})
export class BlogModule {
}
        