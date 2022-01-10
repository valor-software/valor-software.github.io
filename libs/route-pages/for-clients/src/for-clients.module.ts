import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupsComponent } from './startups.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';
import {ARTICLES_LIST, CommonDocsModule} from "@valor-software/common-docs";
import { FeedbackModule } from "@valor-software/feedback";
import { SmallMediumBusinessesComponent } from './smallMediumBusinesses.component';
import { ProcessSchemeComponentComponent} from './process-scheme.component';
import { PopoverComponent } from "./popover.component";
import { PopoverModalComponent } from './popoverModal.component';
import { CurrentPopoversService } from './currentPopovers.service';
import { EnterprisesComponent } from './enterprises.component';
import { NonProfitComponent } from './nonProfit.component';

@NgModule({
  declarations: [
    StartupsComponent,
    SmallMediumBusinessesComponent,
    ProcessSchemeComponentComponent,
    PopoverComponent,
    PopoverModalComponent,
    EnterprisesComponent,
    NonProfitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonDocsModule,
    FeedbackModule,
  ],
  providers: [CurrentPopoversService]
})
export class ForClientsModule {
  static routes: Routes = routes;

}
