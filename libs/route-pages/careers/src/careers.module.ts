import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersPageComponent } from "./careers-page.component";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./routes";

@NgModule({
    declarations: [
        CareersPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class CareersModule {
    static routes: Routes = routes;
}
        