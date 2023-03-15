import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'privacy-policy',
	templateUrl: './privacy-policy-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyPageComponent {

}