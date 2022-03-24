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
                path: ':id',
                component: GeneralItemComponent
            }
        ]
    }
];

