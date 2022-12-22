import { GeneralPageComponent } from "./genral-page.component";
import { GeneralItemComponent } from "./general-item.component";
import { Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GeneralPageComponent
      },
      {
        path: 'terminus',
        loadChildren: () => import('@valor-software/terminus-page').then(m => m.TerminusPageModule)
      },
      {
        path: 'ashes-of-creation',
        loadChildren: () => import('@valor-software/ashes-page').then(m => m.AshesPageModule)
      },
      {
        path: 'dollar-street',
        loadChildren: () => import('@valor-software/dollar-street-page').then(m => m.DollarStreetPageModule)
      },
      {
        path: 'tablesready',
        loadChildren: () => import('@valor-software/tablesready-page').then(m => m.TablesReadyPageModule)
      },
      {
        path: 'liberty-flights',
        loadChildren: () => import('@valor-software/liberty-flights-page').then(m => m.LibertyFlightsPageModule)
      },
      {
        path: 'breethe',
        loadChildren: () => import('@valor-software/breethe-page').then(m => m.BreethePageModule)
      },
      {
        path: ':id',
        component: GeneralItemComponent
      }
    ]
  }
];

