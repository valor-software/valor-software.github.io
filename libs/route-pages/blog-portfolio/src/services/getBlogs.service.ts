import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, from } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { titleRefactoring } from "../utils/titleRefactoring";

import Processor from 'asciidoctor'
const processor = Processor();
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
    //
    // getBlogs() {
    //     this.http
    //       .get(`${GITHUB_API}/contents/blog_list.json`, {
    //         headers: {
    //           Authorization: `token${token}${new Date().getTime()}`,
    //         },
    //       })
    //       .subscribe(
    //         (res: any) => {
    //           this.blogs = this.parseContent(res.content);
    //           const list = this.blogs?.list;
    //           const blog_details = this.blogs?.info;
    //
    //           if (list) {
    //             let apiArray = list.map((item: string, index: number) => {
    //                 token ++;
    //                 return {
    //                 request: this.http.get(
    //                   `${GITHUB_API}/contents/${item}.adoc`, {
    //                       headers: {
    //                           Authorization: `token${token}${new Date().getTime()}`,
    //                       }
    //                     }
    //                 ),
    //                 index,
    //                 routeTitle: item,
    //                 };
    //             });
    //
    //             const array = from(apiArray).pipe(
    //                 mergeMap(item => item.request)
    //             ).subscribe(res => {
    //                 console.log('services', res)
    //             }, error => {
    //                 console.log('error', error)
    //             })
    //           }
    //         },
    //         (error) => {
    //           console.log("error", error);
    //         }
    //       );
    // }

    parseContent(content: string): any {
        return JSON.parse(this.decodeContent(content));
    }

    decodeContent(content: string): string {
        return atob(content);
    }

    parseHtmlContent(content: string) {
        return processor.convert(content);
    }

    // getArticle(title: string): Observable<any>[] {
    //     title = titleRefactoring(title);
    //     return this.blogs ?
    //         [this.http.get(`${GITHUB_API}/contents/${title}.adoc`)] :
    //         [this.http.get(`${GITHUB_API}/contents/blog_list.json`), this.http.get(`${GITHUB_API}/contents/${title}.adoc`)];
    // }

}