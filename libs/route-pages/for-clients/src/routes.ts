import { StartupsComponent } from './startups.component';
import { SmallMediumBusinessesComponent } from './smallMediumBusinesses.component';
import { EnterprisesComponent } from './enterprises.component';
import { NonProfitComponent } from './nonProfit.component';

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
                path: 'enterprises',
                component: EnterprisesComponent
            },
            {
                path: 'non-profit',
                component: NonProfitComponent
            },
            {
                path: '',
                redirectTo: 'startups'
            },
        ]
    }
];

