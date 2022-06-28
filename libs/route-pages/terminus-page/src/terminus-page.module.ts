import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminusPageComponent } from "./terminus-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { TechnologiesCardComponent } from './technologies-card.component';
import { ChallengeCardComponent } from './challenge-card.component';

export { TerminusPageComponent } from "./terminus-page.component";

@NgModule({
    declarations: [TerminusPageComponent, TechnologiesCardComponent, ChallengeCardComponent],
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
