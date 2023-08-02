import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ContactModalComponent } from '../contact-modal/contactModal.components';
import { FormControl, Validators } from '@angular/forms';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'app-footer',
	templateUrl: './app-footer.component.html',
	styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
	emailControl = new FormControl<string>(
		'', [Validators.required, Validators.email]
	);
	readonly validationMessage = {
		type: 'email',
		message: 'Please enter a valid email'
	};

	constructor(
		private modalService: ModalService<ContactModalComponent>
	) {
	}

	openModal(): void {
		this.modalService.open(ContactModalComponent);
	}

	hasEmailError(): boolean {
		return this.emailControl.hasError(this.validationMessage.type)
			&& (this.emailControl.dirty || this.emailControl.touched);
	}
}
