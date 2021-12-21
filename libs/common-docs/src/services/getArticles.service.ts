import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ARTICLES_LIST } from "../tokens/articlesList.token";
// import { ArticlesList } from "../models/articles.list";


@Injectable({providedIn: 'platform'})
export class GetArticlesService {
    private apiArray?: Observable<any>[];
    private articlesList?: string[];

    constructor(
        private http: HttpClient,
        @Inject(ARTICLES_LIST) articlesList: string[]
    ){
        this.articlesList = articlesList;
        this.apiArray = this.articlesList.map(art => this.getArticleRequest(art));
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
        const articlesList = this.articlesList;
        if (articlesList?.length) {
            const list = articlesList.filter(item => value.includes(item));
            return list.map(art => this.getArticleRequest(art));
        }
        return;
    }
}