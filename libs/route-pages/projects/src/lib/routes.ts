import { Routes } from '@angular/router';
import { ProjectComponent } from './components';
import { ProjectsPageComponent } from './projects-page.component';


export const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: ProjectsPageComponent
			},
			{
				path: 'booking',
				loadChildren: () => import('@valor-software/booking-page').then(m => m.BookingPageModule)
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
				path: 'dollar-street',
				loadChildren: () => import('@valor-software/dollar-street-page').then(m => m.DollarStreetPageModule)
			},
			{
				path: 'tablesready',
				loadChildren: () => import('@valor-software/tablesready-page').then(m => m.TablesReadyPageModule)
			},
			{
				path: 'liberty-flights',
				loadChildren: () => import('@valor-software/liberty-flights-page').then(m => m.LibertyFlightsPageModule)
			},
			{
				path: 'breethe',
				loadChildren: () => import('@valor-software/breethe-page').then(m => m.BreethePageModule)
			},
			{
				path: ':id',
				component: ProjectComponent
			}
		]
	}
];

