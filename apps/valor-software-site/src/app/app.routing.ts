import { Routes } from '@angular/router';
import { NotFoundComponent } from './404.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@valor-software/home-page').then(m => m.MainPageModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'services',
    loadChildren: () => import('@valor-software/services-page').then(m => m.ServicesPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('@valor-software/for-clients').then(m => m.ForClientsModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('@valor-software/careers').then(m => m.CareersModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('@valor-software/blog-portfolio').then(m => m.BlogPortfolioModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@valor-software/blog-portfolio').then(m => m.BlogPortfolioModule)
  },
  {
    path: 'all-vacancies',
    redirectTo: 'careers'
  },
  {
    path:'approach.html',
    redirectTo: 'services'
  },
  {
    path: 'approach',
    redirectTo: 'services'
  },
  {
    path: 'careers.html',
    redirectTo: 'careers'
  },
  {
    path: 'services.html',
    redirectTo: 'services'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

