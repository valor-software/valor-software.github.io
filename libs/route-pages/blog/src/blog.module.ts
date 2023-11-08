import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BlogPageComponent } from './pages';
import { CommonDocsModule } from '@valor-software/common-docs';
import { BlogComponent, ArticleComponent, BlogItemComponent } from './components';
import { FeedbackModule } from '@valor-software/feedback';
import { SwiperModule } from 'swiper/angular';
import { DomainNamePipe } from './pipes/domain-name.pipe';

@NgModule({
	declarations: [
		BlogPageComponent,
		BlogComponent,
		ArticleComponent,
		BlogItemComponent,
		DomainNamePipe
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
        