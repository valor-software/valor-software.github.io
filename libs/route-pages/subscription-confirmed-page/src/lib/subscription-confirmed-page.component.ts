import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'subscription-confirmed',
	templateUrl: './subscription-confirmed.component.html',
	styleUrls: ['./subscription-confirmed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionConfirmedPageComponent {
}

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([{
			path: '',
			component: SubscriptionConfirmedPageComponent
		}])
	],
	declarations: [
		SubscriptionConfirmedPageComponent
	]
})
export class SubscriptionConfirmedPageModule {
}
