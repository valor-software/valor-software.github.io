import { Routes } from '@angular/router';
import { TestComponent } from "./test.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@valor-software/home-page').then(m => m.HomePageModule)
  },
  {
    path: 'services',
    component: TestComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

