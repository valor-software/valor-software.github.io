import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibertyFlightsPageComponent } from "./liberty-flights-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { TechnologiesCardComponent } from './technologies-card.component';

export { LibertyFlightsPageComponent } from "./liberty-flights-page.component";

@NgModule({
    declarations: [LibertyFlightsPageComponent, TechnologiesCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule    ]
})
export class LibertyFlightsPageModule {
    static routes: Routes = routes;
}
