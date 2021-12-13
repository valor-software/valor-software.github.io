import { PortfolioPageComponent } from "./portfolio-page.component";
import {ProjectComponent} from "./project.component";

export const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: PortfolioPageComponent
            },
            {
                path: ':id',
                component: ProjectComponent
            }
        ]
    }
];

