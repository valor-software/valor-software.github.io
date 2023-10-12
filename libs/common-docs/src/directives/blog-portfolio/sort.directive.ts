import {
	Directive,
	Output,
	EventEmitter, Input
} from '@angular/core';
import { IArticle, IPortfolio } from '../../models';


@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[sort]'
})
export class SortDirective {
	_items?: IArticle[];
	_activeItem: string[] = [];

	@Input() set activeItem(value: string[]) {
		this._items ? this.sortArticleItems(value) : this.sortProjectItems(value);
	};

	@Input() projects?: IPortfolio[];

	@Input() set articles(value: IArticle[]) {
		this._items = value;
		this.sortArticleItems(this._activeItem);
	};

	@Output() changedProjects: EventEmitter<IPortfolio[]> = new EventEmitter();

	@Output() changedArticles: EventEmitter<IArticle[]> = new EventEmitter();

	sortProjectItems(value: string[]) {
		if (!value.length || value.includes('all_projects')) {
			this.changedProjects.emit(this.projects);
			return;
		}

		const files = new Set<IPortfolio>();

		value.map(val => {
			let filterRes: IPortfolio[] | undefined = [];
			filterRes = this.projects?.filter((item: IPortfolio) => item.sortServices.includes(val));
			if (filterRes?.length) {
				filterRes.map(item => files.add(item));
			}
		});
		this.changedProjects.emit([...files]);
	}


	sortArticleItems(value: string[]) {
		if (!value.length) {
			this.changedArticles.emit(this._items);
			return;
		}

		const files = new Set<IArticle>();
		const lang = value.includes('pt') ? 'pt' : 'en';
		const langFiles: IArticle[] | undefined = this._items?.filter((item: IArticle) => item.language === lang);
		if (value.length === 1 && langFiles?.length) {
			langFiles.map(item => files.add(item));
			this.changedArticles.emit([...files]);
			return;
		}

		value.map(val => {
			let filterRes: IArticle[] | undefined = [];
			filterRes = langFiles?.filter((item: IArticle) => item.domains.includes(val));
			if (filterRes?.length) {
				filterRes.map(item => files.add(item));
			}
		});
		this.changedArticles.emit([...files]);
	}
}
