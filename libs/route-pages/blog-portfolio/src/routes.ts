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
                path: 'breethe',
                loadChildren: () => import('@valor-software/breethe-page').then(m => m.BreethePageModule)
            },
            {
                path: ':id',
                component: GeneralItemComponent
            },
        ]
    }
];

