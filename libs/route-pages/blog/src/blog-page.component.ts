import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ArticlesList } from "./articles.list";
import { GetArticlesService } from "./getArticles.service";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog',
    templateUrl: './blog-page.component.html'
})
export class BlogPageComponent {
    constructor(
        private router: Router,
        private http: HttpClient,
        private getArticles: GetArticlesService
    ) {
        // this.http.get('./assets/blog/articles/arc.json').subscribe((res: any) => {
        //    console.log('2', res);
        //    console.log('2', encodeURIComponent('ARC – a new weapon against accessibility bugs'));
        // });
    }

    testNavigate() {
        this.router.navigate(['./blog/article'], {queryParams: {name: 'ARC – a new weapon against accessibility bugs'}});
    }
}