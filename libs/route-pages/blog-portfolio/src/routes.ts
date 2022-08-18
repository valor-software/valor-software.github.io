import { GeneralPageComponent } from "./genral-page.component";
import { GeneralItemComponent } from "./general-item.component";


export const routes = [
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
        path: ':id',
        component: GeneralItemComponent
      }
    ]
  }
];

