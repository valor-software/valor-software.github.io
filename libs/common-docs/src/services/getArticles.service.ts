import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticle } from '../models/article.interface';
import { titleRefactoring } from '../utils/titleRefactoringUtil';
import { VALOR_ASSETS_URL, ARTICLES_LIST, ARTICLES_REFACTORED_TITLE_LIST } from '../common-docs.module';

@Injectable({ providedIn: 'platform' })
export class GetArticlesService {
	private apiArray?: Observable<any>[];
	private articlesList?: string[];
	private articlesRefactoredTitlesList?: string[];
	private refactoredArticleList?: string[];

	constructor(
		private http: HttpClient,
		@Inject(ARTICLES_LIST) articlesList: string[],
		@Inject(ARTICLES_REFACTORED_TITLE_LIST) articlesRefactoredTitlesList: string[],
		@Inject(VALOR_ASSETS_URL) private readonly valorAssetsUrl: string,
	) {
		console.log('GetArticlesService', valorAssetsUrl);

		this.articlesList = articlesList;
		this.articlesRefactoredTitlesList = articlesRefactoredTitlesList;
		this.apiArray = this.articlesRefactoredTitlesList.map((art) => {
			return this.getArticleRequest(art);
		});
	}

	getArticleRequest(art: string): Observable<IArticle> {
		return this.http.get(`${this.valorAssetsUrl}/assets/articles/${art}/${art}.json`) as Observable<IArticle>;
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

		return this.http.get(`${this.valorAssetsUrl}/assets/articles/${link}/${link}.html`, { responseType: 'text' });
	}
}