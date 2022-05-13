import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { ARTICLES_LIST } from "../tokens/articlesList.token";
import { IArticle } from "../models/article.interface";


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

    getArticleRequest(art: string):Observable<IArticle> {
        return this.http.get(`assets/blog/articles/${art}.json`) as Observable<IArticle>;
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

    // @ts-ignore
    getHTMLSource(link?: string): Observable<any> | undefined {
        console.log(link)
        if (!link) {
            return;
        }

        return this.http.get(`assets/blog/adoc/${link}.adoc`, {responseType:'text'})
    }
}