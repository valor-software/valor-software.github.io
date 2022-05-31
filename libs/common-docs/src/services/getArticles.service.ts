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
        this.apiArray = this.articlesList.map((art, index) => {
            return this.getArticleRequest((index + 1).toString());
        }).reverse();
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

    getArticleRouteLink(title: string): string | undefined {
        if (!title) {
            return;
        }

        const index = this.articlesList?.reverse().findIndex(item => item === title);

        if (!index && index !== 0) {
            return;
        }

        return (index + 1).toString();
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
        if (!link) {
            return;
        }

        return this.http.get(`assets/blog/adoc/${link}.adoc`, {responseType:'text'})
    }
}