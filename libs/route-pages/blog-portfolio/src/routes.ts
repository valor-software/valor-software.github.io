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
                path: 'tablesready',
                loadChildren: () => import('@valor-software/tablesready-page').then(m => m.TablesReadyPageModule)
            },
            {
                path: ':id',
                component: GeneralItemComponent
            },
        ]
    }
];

