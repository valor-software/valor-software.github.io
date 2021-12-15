import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticlesList } from "../models/articles.list";



@Injectable({providedIn: 'platform'})
export class GetArticlesService {
    private apiArray?: Observable<any>[];

    constructor(
        private http: HttpClient
    ){
        const list = ArticlesList;
        this.apiArray = list.map(art => this.getArticleRequest(art));
    }

    getArticleRequest(art: string):Observable<any> {
        return this.http.get(`assets/blog/articles/${art}.json`);
    }

    getPreviewArticle(): Observable<any>[] | undefined {
        return this.apiArray?.slice(0, 3);
    }

    getFullListOfArticles(): Observable<any>[] | undefined {
        return this.apiArray;
    }

    getArticlesByNames(value: string[]): Observable<any>[] | undefined{
        const articlesList = ArticlesList;
        const list = articlesList.filter(item => value.includes(item));
        return list.map(art => this.getArticleRequest(art));
    }
}