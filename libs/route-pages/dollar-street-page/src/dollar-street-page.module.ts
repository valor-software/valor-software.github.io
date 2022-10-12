import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { DollarStreetPageComponent } from './dollar-street-page.component';
import { FeedbackModule } from '@valor-software/feedback';

@NgModule({
    declarations: [DollarStreetPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule,
        FeedbackModule
    ]
})
export class DollarStreetPageModule {
    static routes: Routes = routes;
}
