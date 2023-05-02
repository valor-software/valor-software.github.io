import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'blog-page',
	templateUrl: './blog-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {
	noBuilderPageForUrl = false;
}