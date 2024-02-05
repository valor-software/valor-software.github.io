import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BlogPageComponent } from './pages';
import { CommonDocsModule } from '@valor-software/common-docs';
import { BlogComponent, ArticleComponent, BlogItemComponent } from './components';
import { FeedbackModule } from '@valor-software/feedback';
import { SwiperModule } from 'swiper/angular';
import { DomainNamePipe, HighlightMatchingLettersPipe } from './pipes';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		BlogPageComponent,
		BlogComponent,
		ArticleComponent,
		BlogItemComponent,
		DomainNamePipe,
		HighlightMatchingLettersPipe
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CommonDocsModule,
		FeedbackModule,
		SwiperModule,
		MatAutocompleteModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		MatButtonModule
	]
})
export class BlogModule {
}
        