import { StartupsComponent } from "./startups.component";
import { SmallMediumBusinessesComponent } from "./smallMediumBusinesses.component";

export const routes = [
    {
        path: '',
        children: [
            {
                path: 'startups',
                component: StartupsComponent
            },
            {
                path: 'smbs',
                component: SmallMediumBusinessesComponent
            },
            {
                path: '',
                redirectTo: 'startups'
            },
        ]
    }
];

