import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./routes";
import { BlogPageComponent } from "./blog-page.component";
import { ArticleComponent } from "./article.component";
import { BlogComponent } from "./blog.component";
import { GetArticlesService } from "@valor-software/common-docs";
import { SortBlogsDirective } from "./sort.directive";
import { CommonDocsModule } from "@valor-software/common-docs";
import { ArticlesRouteService } from "@valor-software/common-docs";
import { SwiperModule } from "swiper/angular";


@NgModule({
    declarations: [
        BlogPageComponent,
        ArticleComponent,
        BlogComponent,
        SortBlogsDirective
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
