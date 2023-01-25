import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPageComponent } from "./booking-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { BookingChallengeCardComponent } from './booking-challenge-card/booking-challenge-card.component';

export { BookingPageComponent } from "./booking-page.component";

@NgModule({
    declarations: [BookingPageComponent, BookingChallengeCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule
    ]
})
export class BookingPageModule {
    static routes: Routes = routes;
}
