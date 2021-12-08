import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./routes";
import { BlogPageComponent } from "./blog-page.component";
import { ArticleComponent } from "./article.component";
import { BlogComponent } from "./blog.component";
import { GetArticlesService } from "./getArticles.service";
import { SortBlogsDirective } from "./sort.directive";
import { BlogItemComponent } from "./blog-item.component";
import { CommonDocsModule } from "@valor-software/common-docs";
import {ArticlesRouteService} from "./articlesRoute.service";
import { SwiperModule } from "swiper/angular";
import { BlogPreviewComponent } from './blog-preview.component';


@NgModule({
    declarations: [
        BlogPageComponent,
        ArticleComponent,
        BlogComponent,
        SortBlogsDirective,
        BlogItemComponent,
        BlogPreviewComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule
    ],
    providers: [GetArticlesService, ArticlesRouteService]
})
export class BlogModule {
    static routes: Routes = routes;
}
