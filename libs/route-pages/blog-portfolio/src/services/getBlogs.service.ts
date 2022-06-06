import { Injectable } from '@angular/core';

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
    blogs?: IBlogs;

    parseContent(content: string): any {
        return JSON.parse(this.decodeContent(content));
    }

    decodeContent(content: string): string {
        return atob(content);
    }

}