import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { SoftwareEngineeringComponent } from './software-engineering.component';

export { SoftwareEngineeringComponent } from "./software-engineering.component";

@NgModule({
    declarations: [SoftwareEngineeringComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule
    ]
})
export class SoftwareEngineeringModule {
    static routes: Routes = routes;
}
