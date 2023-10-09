import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsBlockComponent, ProjectComponent } from './components';
import { CommonDocsModule } from '@valor-software/common-docs';
import { FeedbackModule } from '@valor-software/feedback';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ProjectsPageComponent } from './projects-page.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CommonDocsModule,
		FeedbackModule,
		SwiperModule
	],
	declarations: [
		ProjectsPageComponent,
		ProjectComponent,
		ProjectsBlockComponent,
	]
})
export class ProjectsModule {
}
