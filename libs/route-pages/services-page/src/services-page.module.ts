import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from "./services-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { GetVerticalServices } from './services/getVerticalServices.service';
import { getCoreTeamServices } from './services/getCoreTeam.service';
import { TraitsCardComponent } from './components/traits-cards/traits-cards.component';
import { CoreTeamsComponent } from './components/core-team/core-team.component';
import { ServiceHeaderCardComponent } from './components/service-header-card/service-header-card.component';
import { ServiceHelpCardCardComponent } from './components/service-help-card/service-help-card.component';
import { VerticalServicesCardComponent } from './components/vertical-services-card/vertical-services-card.component';
import { SoftwareEngineeringComponent } from './pages/software-engineering/software-engineering.component';
import { HierarchyServiceCardComponent } from './components/hierarchy-service-card/hierarchy-service-card.component';

export { ServicesPageComponent } from "./services-page.component";

@NgModule({
    declarations: [
        ServicesPageComponent,
        SoftwareEngineeringComponent,
        TraitsCardComponent, CoreTeamsComponent,
        ServiceHeaderCardComponent,
        ServiceHelpCardCardComponent,
        VerticalServicesCardComponent,
        ServiceHeaderCardComponent,
        HierarchyServiceCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule,
    ],
    providers: [GetVerticalServices, getCoreTeamServices]
})
export class ServicesPageModule {
    static routes: Routes = routes;
}
