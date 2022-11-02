import { StartupsComponent } from './startups.component';
import { SmallMediumBusinessesComponent } from './smallMediumBusinesses.component';
import { EnterprisesComponent } from './enterprises.component';
import { NonProfitComponent } from './nonProfit.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
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
                redirectTo: 'startups',
                pathMatch: 'full'
            },
        ]
    }
];

