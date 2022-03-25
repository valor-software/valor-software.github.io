import { Component, Input } from '@angular/core';
import { IArticle } from "../../models/article.interface";
import { IPortfolio } from "@valor-software/portfolio";


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'blog-portfolio-item',
    template:`
        <div class="article-item">
            <div class="img-container zoom-img-scale">
                <img class="w-full h-full object-cover" [src]="article ? article?.bgImg : project?.previewImg" [alt]="article ? article?.title : project?.name + 'img'">
            </div>
            <div class="text-container">
                <p>{{article ? article?.title : project?.name}}</p>
            </div>
        </div>
    `
})
export class BlogPortfolioItemComponent {
    @Input() article?: IArticle;
    @Input() project?: IPortfolio;
}