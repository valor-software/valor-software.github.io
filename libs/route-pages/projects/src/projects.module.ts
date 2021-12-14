import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from "./portfolio-page.component";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./routes";
import { ProjectsBlockComponent } from "./projects-block.component";
import { GetPortfolioService, ProjectsRouteService } from "@valor-software/portfolio";
import { ProjectItemComponent } from "./project-item.component";
import { SortProjectsDirective } from "./sort.directive";
import { ProjectComponent } from "./project.component";
import { CommonDocsModule } from "@valor-software/common-docs";
import { FeedbackModule } from "@valor-software/feedback";

@NgModule({
  declarations: [
    PortfolioPageComponent,
    ProjectsBlockComponent,
    ProjectItemComponent,
    SortProjectsDirective,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonDocsModule,
    FeedbackModule
  ],
  providers:[GetPortfolioService, ProjectsRouteService]
})
export class ProjectsModule {
  static routes: Routes = routes;
}
        