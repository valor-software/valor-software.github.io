import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoralPageComponent } from "./coral-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { FeedbackModule } from '@valor-software/feedback';
import { FeaturesCardComponent } from './features-card.component';

export { CoralPageComponent } from "./coral-page.component";

@NgModule({
    declarations: [CoralPageComponent, FeaturesCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule,
        FeedbackModule
    ]
})
export class CoralPageModule {
    static routes: Routes = routes;
}
