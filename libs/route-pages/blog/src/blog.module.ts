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

@NgModule({
    declarations: [
        BlogPageComponent,
        ArticleComponent,
        BlogComponent,
        SortBlogsDirective,
        BlogItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [GetArticlesService]
})
export class BlogModule {
    static routes: Routes = routes;
}
