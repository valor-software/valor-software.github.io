import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPortfolio, PortfolioList} from "./portfolio.list";


@Injectable({providedIn: 'platform'})
export class GetPortfolioService {
    private apiArray?: Observable<any>[];

    constructor(
        private http: HttpClient
    ){
        const list = PortfolioList;
        this.apiArray = list.map(art => this.getPortfolioRequest(art));
    }

    getPortfolioRequest(art: string):Observable<any> {
        return this.http.get(`assets/portfolio/${art}.json`);
    }

    // getPreviewArticle(): Observable<any>[] | undefined {
    //     return this.apiArray?.slice(0, 3);
    // }

    getFullListOfPortfolio(): Observable<IPortfolio>[] | undefined {
        return this.apiArray;
    }
}