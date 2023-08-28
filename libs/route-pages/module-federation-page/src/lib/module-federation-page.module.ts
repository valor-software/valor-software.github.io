import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';
import { ModuleFederationPageComponent } from './module-federation-page/module-federation-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModuleFederationPageComponent]
})
export class ModuleFederationPageModule {
  static routes: Routes = routes;
}
