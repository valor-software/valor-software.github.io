import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
// import { HomePageComponent } from "./home-page.component";
import { routes } from "./routes";
import { SwiperModule } from "swiper/angular";
import { CommonDocsModule } from '@valor-software/common-docs';
import { NpmStatisticService } from './getNpmStatistic.service';
import { TestComponent } from "./test.component";
export { TestComponent } from "./test.component";

// export { HomePageComponent } from "./home-page.component";

@NgModule({
    declarations: [
        // HomePageComponent,
        TestComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SwiperModule,
        CommonDocsModule
    ],
    providers: [NpmStatisticService]
})
export class HomePageModule {
    static routes: Routes = routes;
}
