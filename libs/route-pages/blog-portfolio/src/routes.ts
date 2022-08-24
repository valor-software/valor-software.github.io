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
                path: 'liberty-flights',
                loadChildren: () => import('@valor-software/liberty-flights-page').then(m => m.LibertyFlightsPageModule)
            },
            {
                path: ':id',
                component: GeneralItemComponent
            },
        ]
    }
];

