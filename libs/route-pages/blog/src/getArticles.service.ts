import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticlesList } from "./articles.list";



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
        return this.apiArray?.slice(0, 2);
    }

    getFullListOfArticles(): Observable<any>[] | undefined {
        return this.apiArray;
    }
}