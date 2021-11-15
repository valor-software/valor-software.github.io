import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'clients'
  // },
  // {
  //   path: 'services'
  // },
  // {
  //   path: 'portfolio'
  // },
  // {
  //   path: 'careers'
  // },
  // {
  //   path: 'blog'
  // },






  // {
  //   path: 'typeahead',
  //   data: ['Typeahead', {moduleName: 'TypeaheadModule', moduleFolder: 'typeahead'}],
  //   loadChildren: () => import('@ngx-bootstrap-doc/typeahead').then(m => m.DemoTypeaheadModule)
  // },
  {
    path: '**',
    redirectTo: '/'
  }
];

