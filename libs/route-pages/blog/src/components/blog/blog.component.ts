import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IArticle, titleRefactoring } from '@valor-software/common-docs';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'blog-block',
	styleUrls: ['./blog.component.scss'],
	templateUrl: './blog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
	articles: IArticle[] = [];
	showAll = false;
	maxArticlesLength = 9;

	@Input() set _articles(values: IArticle[]) {
		this.articles = Object.assign(values);
	}

	// TODO: remove or rework this code while switch language implementation
	/*ngAfterViewInit(): void {
		this.toggleLanguage('en');
	}

	getLanguageTitle(key: string) {
		const resKey = key as keyof typeof Languages;
		return Languages[resKey];
	}

	toggleLanguage(key: string) {
		if (!this.activeIndex.includes(key)) {
			const keys = this.activeIndex.filter(item => item !== 'pt' && item !== 'en');
			this.activeIndex = [...keys, key];
		}

		this.showAll = false;
	}*/

	getRouteLink(link: string): string {
		return titleRefactoring(link);
	}
}