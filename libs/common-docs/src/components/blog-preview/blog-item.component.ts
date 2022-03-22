import { Component, Input } from '@angular/core';
import { IArticle } from "../../models/article.interface";


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog-item',
    template:`
        <div class="article-item">
            <div class="img-container zoom-img-scale">
                <img class="w-full h-full object-cover" [src]="article?.bgImg" [alt]="article?.title + 'img'">
            </div>
            <div class="text-container">
                <p>{{article?.title}}</p>
            </div>
        </div>
    `
})
export class BlogItemComponent {
    @Input() article?: IArticle;
}