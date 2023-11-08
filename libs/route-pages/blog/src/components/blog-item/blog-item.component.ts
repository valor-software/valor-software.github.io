import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IArticle } from '@valor-software/common-docs';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'blog-item',
	templateUrl: './blog-item.component.html',
	styleUrls: ['./blog-item.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent {
	@Input() set article(data: IArticle) {
		this._article = data;
		const date = new Date(data.date);
		this._article.date = isNaN(date.getTime()) ? '' : date.toISOString();
	}
	@Input() showLatestArticles = false;
	@Input() showActiveArticle = false;

	_article?: IArticle;
}