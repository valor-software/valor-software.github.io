import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'cookie-consent-banner',
	templateUrl: './cookie-consent-banner.component.html',
	styleUrls: ['./cookie-consent-banner.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsentBannerComponent {
	@Output() readonly acceptCookies = new EventEmitter<boolean>;

	onAcceptCookies(): void {
		this.acceptCookies.emit(true);
	}
}
