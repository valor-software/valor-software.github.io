import { GeneralPageComponent } from "./genral-page.component";
import { GeneralItemComponent } from "./general-item.component";


export const routes = [
  {
    path: '',
    children: [
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
                path: 'dollar-street',
                loadChildren: () => import('@valor-software/dollar-street-page').then(m => m.DollarStreetPageModule)
            },
            {
                path: ':id',
                component: GeneralItemComponent
            },
        ]
    }
];

