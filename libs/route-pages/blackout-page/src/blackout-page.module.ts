import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { FeedbackModule } from '@valor-software/feedback';
import { BlackoutPageComponent } from './blackout-page.component';

@NgModule({
    declarations: [BlackoutPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule,
        FeedbackModule
    ]
})
export class BlackoutPageModule {
    static routes: Routes = routes;
}
