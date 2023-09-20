import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPortfolio } from '../models/portfolio.interface';
import { PORTFOLIO_LIST } from '../tokens/portfolioList.token';
import { titleRefactoring, checkHTMLExtension } from '../utils/titleRefactoringUtil';


@Injectable({ providedIn: 'platform' })
export class GetPortfolioService {
	private apiArray?: Observable<any>[];
	private portfolioList?: string[];
	private refactoredList?: string[];

	constructor(
		private http: HttpClient,
		@Inject(PORTFOLIO_LIST) portfolioList: string[]
	) {
		this.portfolioList = portfolioList;
		if (!this.refactoredList?.length) {
			this.refactoredList = this.portfolioList.map(item => titleRefactoring(item)).reverse();
		}

		this.apiArray = this.refactoredList.map(art => {
			return this.getPortfolioRequest(art);
		}).reverse();
	}

	getPortfolioRequest(art: string): Observable<any> {
		return this.http.get(`https://valor-software.com/assets/portfolio/clients/${art}.json`);
	}

	getFullListOfPortfolio(): Observable<IPortfolio>[] | undefined {
		return this.apiArray;
	}

	getProjectList(): string[] | undefined {
		return this.portfolioList;
	}

	getRefactoredList(): string[] | undefined {
		return this.refactoredList;
	}

	getTitleIndex(title: string): number | undefined {
		if (!this.refactoredList?.length) {
			return;
		}

		const refactoredList = [...this.refactoredList].reverse();
		let index = refactoredList.findIndex(item => item === title || item === checkHTMLExtension(title));

		if (index || index === 0) {
			index = index + 1;
			return index;
		}

		return;
	}

	getRefactoredTitle(title: string): string {
		return titleRefactoring(title);
	}
}