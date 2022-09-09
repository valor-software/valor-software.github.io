import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreethePageComponent } from "./breethe-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { DeliverableCardComponent } from './deliverable-card.component';
import { FeedbackModule } from '@valor-software/feedback';

export { BreethePageComponent } from "./breethe-page.component";

@NgModule({
    declarations: [BreethePageComponent, DeliverableCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule,
        FeedbackModule
    ]
})
export class BreethePageModule {
    static routes: Routes = routes;
}
