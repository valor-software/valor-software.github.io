import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ARTICLES_LIST, ARTICLES_REFACTORED_TITLE_LIST } from '../tokens/articlesList.token';
import { IArticle } from '../models/article.interface';
import { titleRefactoring } from '../utils/titleRefactoringUtil';

@Injectable({ providedIn: 'platform' })
export class GetArticlesService {
	private apiArray?: Observable<any>[];
	private articlesList?: string[];
	private articlesRefactoredTitlesList?: string[];
	private refactoredArticleList?: string[];

	constructor(
		private http: HttpClient,
		@Inject(ARTICLES_LIST) articlesList: string[],
		@Inject(ARTICLES_REFACTORED_TITLE_LIST) articlesRefactoredTitlesList: string[]
	) {
		this.articlesList = articlesList;
		this.articlesRefactoredTitlesList = articlesRefactoredTitlesList;
		this.apiArray = this.articlesRefactoredTitlesList.map((art) => {
			return this.getArticleRequest(art);
		});
	}

	getArticleRequest(art: string): Observable<IArticle> {
		return this.http.get(`https://valor-software.com/assets/articles/${art}/${art}.json`) as Observable<IArticle>;
	}

	getPreviewArticle(): Observable<any>[] | undefined {
		return this.apiArray;
	}

	getFullListOfArticles(): Observable<any>[] | undefined {
		return this.apiArray;
	}

	getArticlesByNames(value: string[]): Observable<any>[] | undefined {
		if (!this.articlesList?.length) {
			return;
		}

		const articlesList = [...this.articlesList];
		if (articlesList?.length) {
			return value.map(art => this.getArticleRequest(art));
		}
		return;
	}

	getRefactoredArticlesList(): string[] | undefined {
		return this.refactoredArticleList;
	}

	getRefactoredTitle(title: string): string {
		return titleRefactoring(title);
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	getHTMLSource(link?: string): Observable<any> | undefined {
		if (!link) {
			return;
		}

		return this.http.get(`https://valor-software.com/assets/articles/${link}/${link}.html`, { responseType: 'text' });
	}
}