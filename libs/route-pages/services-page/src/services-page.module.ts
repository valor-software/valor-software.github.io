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
import { QualityAssuranceComponent } from './pages/quality-assurance/quality-assurance.component';
import { SoftwareEngineeringComponent } from './pages/software-engineering/software-engineering.component';
import { HierarchyServiceCardComponent } from './components/hierarchy-service-card/hierarchy-service-card.component';
import { DevOpsComponent } from './pages/devops/devops.component';
import { ProductOwnershipAndProjectManagementComponent } from './pages/product-owner-and-product-management/product-owner-and-product-management.component';
import { SupportMaintenanceComponent } from './pages/support-maintenance/support-maintenance.component';
import { DesignComponent } from './pages/design/design.component';

export { ServicesPageComponent } from "./services-page.component";

@NgModule({
    declarations: [
        QualityAssuranceComponent,
        DevOpsComponent,
        ProductOwnershipAndProjectManagementComponent,
        SupportMaintenanceComponent,
        DesignComponent,
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
