import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AshesPageComponent } from "./ashes-page.component";
import { routes } from "./routes";
import { CommonDocsModule } from "@valor-software/common-docs";
import { FeedbackModule } from '@valor-software/feedback';

@NgModule({
  declarations: [AshesPageComponent],
  imports: [
    CommonModule,
    CommonDocsModule,
    FeedbackModule,
    RouterModule.forChild(routes)
  ]
})
export class AshesPageModule {
  static routes: Routes = routes;
}
