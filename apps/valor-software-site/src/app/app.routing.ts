import { Router, Routes } from '@angular/router';
import { NotFoundComponent } from './404.component';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@valor-software/home-page').then(m => m.MainPageModule)
  },
  {
    path: '404',
    component: NotFoundComponent,
    canMatch: [
      () => {
        // there is redirect from Mailchimp in the app where route not being found has custom handling,
        // this allows to skip not found page
        return !inject(Router).url?.includes('subscription-confirmed');
      },
    ],
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
    loadChildren: () => import('@valor-software/blog-portfolio').then(m => m.BlogPortfolioModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@valor-software/blog-portfolio').then(m => m.BlogPortfolioModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('@valor-software/privacy-policy-page').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'subscription-confirmed',
    loadComponent: () => import('@valor-software/subscription-confirmed-page').then(c => c.SubscriptionConfirmedPageComponent)
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

