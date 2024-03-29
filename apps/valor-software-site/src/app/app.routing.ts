import { Routes } from '@angular/router';
import { NotFoundComponent } from './404.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@valor-software/home-page').then(m => m.MainPageModule)
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'press-release',
    loadChildren: () => import('@valor-software/press-release').then(m => m.PressReleaseModule)
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
    loadChildren: () => import('@valor-software/blog').then(m => m.BlogModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@valor-software/projects').then(m => m.ProjectsModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('@valor-software/privacy-policy-page').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'subscription-confirmed',
    loadChildren: () => import('@valor-software/subscription-confirmed-page').then(m => m.SubscriptionConfirmedPageModule)
  },
  {
    path: 'module-federation',
    loadChildren: () => import('@valor-software/module-federation-page').then(m => m.ModuleFederationPageModule)
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
    redirectTo: '404',
  }
];

