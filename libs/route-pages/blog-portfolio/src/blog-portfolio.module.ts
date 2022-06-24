import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from './routes';
import { GeneralPageComponent } from "./genral-page.component";
import { CommonDocsModule } from "@valor-software/common-docs";
import { BlogComponent } from "./blog.component";
import { ProjectsBlockComponent } from "./projects-block.component";
import { SortDirective } from './directives/sort.directive';
import { GeneralItemComponent } from './general-item.component';
import { ArticleComponent } from './article.component';
import { ProjectComponent } from './project.component';
import { FeedbackModule } from "@valor-software/feedback";
import { SwiperModule } from "swiper/angular";
import { GetBlogsService } from "./services/getBlogs.service";

@NgModule({
  declarations: [
    GeneralPageComponent,
    BlogComponent,
    ProjectsBlockComponent,
    SortDirective,
    GeneralItemComponent,
    ArticleComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonDocsModule,
    FeedbackModule,
    SwiperModule
  ],
  providers: [ GetBlogsService ]
})
export class BlogPortfolioModule { }
        