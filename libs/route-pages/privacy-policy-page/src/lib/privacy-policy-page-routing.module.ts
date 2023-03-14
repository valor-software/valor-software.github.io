import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PrivacyPolicyPageComponent } from './components/privacy-policy-page/privacy-policy-page.component';

export const routes: Route[] = [
	{
		path: '',
		component: PrivacyPolicyPageComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
})
export class PrivacyPolicyPageRoutingModule {
}
