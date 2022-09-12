import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminusPageComponent } from "./terminus-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { ChallengeCardComponent } from './challenge-card.component';

export { TerminusPageComponent } from "./terminus-page.component";

@NgModule({
    declarations: [TerminusPageComponent, ChallengeCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule
    ]
})
export class TerminusPageModule {
    static routes: Routes = routes;
}
