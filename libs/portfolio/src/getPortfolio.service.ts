import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPortfolio } from "./portfolio.interface";
import { PORTFOLIO_LIST } from "./portfolioList.token";


@Injectable({providedIn: 'platform'})
export class GetPortfolioService {
    private apiArray?: Observable<any>[];
    private portfolioList?: string[];

    constructor(
        private http: HttpClient,
        @Inject(PORTFOLIO_LIST) portfolioList: string[]
    ){
        this.portfolioList = portfolioList;
        this.apiArray = this.portfolioList.map(art => this.getPortfolioRequest(art));
    }

    getPortfolioRequest(art: string):Observable<any> {
        return this.http.get(`assets/portfolio/clients/${art}.json`);
    }

    getFullListOfPortfolio(): Observable<IPortfolio>[] | undefined {
        return this.apiArray;
    }

    getProjectList(): string[] | undefined {
        return this.portfolioList;
    }
}