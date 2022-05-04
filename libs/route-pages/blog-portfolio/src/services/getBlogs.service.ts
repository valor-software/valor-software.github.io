import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { titleRefactoring } from "../utils/titleRefactoring";

import Processor from 'asciidoctor'
const processor = Processor();
const GITHUB_API = 'https://api.github.com/repos/SvetlanaMuravlova/testBlog'
interface IBlogs {
    list: string[];
    info: {
        author: string;
        domains: string[];
        authorImg: string;
        language: string;
        bgImg: string;
        title: string;
        position: string;
        date: string;
        seoDescription: string;
    }[]
}

@Injectable({providedIn: 'platform'})
export class GetBlogsService {
    $articles: Subject<any> = new Subject<any>();
    blogs?: IBlogs;
    constructor(
        private http: HttpClient
    ){}

    getBlogs() {
        this.http.get(`${GITHUB_API}/contents/blog_list.json`).subscribe((res: any) => {
            this.blogs = this.parseContent(res.content);
            const list = this.blogs?.list;
            const blog_details = this.blogs?.info;

            if (list) {
                let apiArray = list.map( (item: string, index: number) => {
                    return {
                        request: this.http.get(`${GITHUB_API}/contents/${item}.adoc`),
                        index,
                        routeTitle: item
                    }
                });
                const articles = apiArray[0].request.subscribe((resp: any) => {
                    const content = atob(resp.content);
                    const info = blog_details?.[0];
                    this.$articles.next({
                        content, info, index: apiArray[0].index, routeTitle: apiArray[0].routeTitle
                    })
                })
            }

        }, error => {
            console.log('error', error);
        })
    }

    parseContent(content: string): any {
        return JSON.parse(this.decodeContent(content));
    }

    decodeContent(content: string): string {
        return atob(content);
    }

    parseHtmlContent(content: string) {
        return processor.convert(content);
    }

    getArticle(title: string): Observable<any>[] {
        title = titleRefactoring(title);
        return this.blogs ?
            [this.http.get(`${GITHUB_API}/contents/${title}.adoc`)] :
            [this.http.get(`${GITHUB_API}/contents/blog_list.json`), this.http.get(`${GITHUB_API}/contents/${title}.adoc`)];
    }

}