import { BlogPageComponent } from './blog-page.component';
import { Routes } from '@angular/router';
import { ArticleComponent } from './components';

export const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: BlogPageComponent
			},
			{
				path: ':id',
				component: ArticleComponent
			}
		]
	}
];

