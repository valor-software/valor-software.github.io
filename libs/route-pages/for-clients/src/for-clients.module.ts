import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupsComponent } from './startups.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';
import { CommonDocsModule } from "@valor-software/common-docs";
import { FeedbackModule } from "@valor-software/feedback";
import { SmallMediumBusinessesComponent } from './smallMediumBusinesses.component';

@NgModule({
  declarations: [
    StartupsComponent,
    SmallMediumBusinessesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonDocsModule,
    FeedbackModule
  ]
})
export class ForClientsModule {
  static routes: Routes = routes;

}
