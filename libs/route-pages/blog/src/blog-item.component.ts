import { Component, Input } from '@angular/core';
import { IArticle } from "./articles.list";


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog-item',
    template:`
        <div class="w-full flex flex-col justify-between mb-16">
            <div class="w-full h-350 mb-6">
                <img class="w-full h-full object-cover" [src]="article?.bgImg" [alt]="article?.title + 'img'">
            </div>
            <div class="w-full text-light_title_col text-24 md:text-32 leading-40 font-bold">
                <p>{{article?.title}}</p>
            </div>
        </div>
    `
})
export class BlogItemComponent {
    @Input() article?: IArticle;
}