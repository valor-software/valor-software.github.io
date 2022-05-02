import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import Processor from 'asciidoctor'
const processor = Processor();

@Injectable({providedIn: 'platform'})
export class GetBlogsService {
    $articles: Subject<any> = new Subject<any>();
    constructor(
        private http: HttpClient
    ){
        this.getBlogs();
        let html = processor.convert('Hello, _Asciidoctor_');
    }

    getBlogs() {
        this.http.get('https://api.github.com/repos/SvetlanaMuravlova/testBlog/contents/blog_list.json').subscribe((res: any) => {
            const blogsInfo = JSON.parse(atob(res.content));
            const list = blogsInfo.list;
            const blog_details = blogsInfo.blog_info;

            if (list) {
                let apiArray = list.map( (item: string, index: number) => {
                    return {
                        request: this.http.get(`https://api.github.com/repos/SvetlanaMuravlova/testBlog/contents/${item}.adoc`),
                        index,
                        routeTitle: item
                    }
                });
                console.log(apiArray);

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

}