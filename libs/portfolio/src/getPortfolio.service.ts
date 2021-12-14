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

    getFullListOfPortfolio(): Observable<IPortfolio>[] | undefined {
        return this.apiArray;
    }

    getProjectList(): string[] {
        return PortfolioList;
    }
}