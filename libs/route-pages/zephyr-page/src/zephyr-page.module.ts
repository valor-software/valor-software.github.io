import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZephyrPageComponent } from "./zephyr-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";

export { ZephyrPageComponent } from "./zephyr-page.component";

@NgModule({
    declarations: [ZephyrPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule
    ]
})
export class ZephyrPageModule {
    static routes: Routes = routes;
}
