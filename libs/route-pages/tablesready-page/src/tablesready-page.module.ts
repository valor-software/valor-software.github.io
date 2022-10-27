import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesReadyPageComponent } from "./tablesready-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { FeedbackModule } from '@valor-software/feedback';

export { TablesReadyPageComponent } from "./tablesready-page.component";

@NgModule({
    declarations: [TablesReadyPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule,
        FeedbackModule
    ]
})
export class TablesReadyPageModule {
    static routes: Routes = routes;
}
