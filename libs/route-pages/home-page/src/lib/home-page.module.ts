import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page.component";
import { routes } from "./routes";
import { SwiperModule } from "swiper/angular";

export { HomePageComponent } from "./home-page.component";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SwiperModule
    ]
})
export class HomePageModule { }
