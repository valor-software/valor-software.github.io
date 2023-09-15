import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyServiceName, ContactData, SendEmailService } from '../../services/send-email.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { errorVocabulary, IError } from './errors';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

interface ContactModalForm {
	firstName: FormControl<string | null>;
	lastName: FormControl<string | null>;
	email: FormControl<string | null>;
	companyName: FormControl<string | null>;
	jobRole: FormControl<string | null>;
	companySize: FormControl<string | null>;
	companyServiceName: FormControl<CompanyServiceName | null>;
	comment: FormControl<string | null>;
	hasAcceptedPrivacyPolicy: FormControl<boolean | null>;
	hasAcceptedContactAgreement: FormControl<boolean | null>;
	['g-recaptcha-response']: FormControl<string | null>;
}

const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'contact-modal',
	templateUrl: './contact-modal.component.html',
	styleUrls: ['./contact-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactModalComponent implements OnDestroy {
	showSuccessModalState = false;
	showErrorModalState = false;
	submitErrorMessage = '';

	form = this._createForm();
	readonly validationMessages = {
		firstName: [
			{ type: 'required', message: 'This field is required field' },
		],
		lastName: [
			{ type: 'required', message: 'This field is required field' },
		],
		email: [
			{ type: 'required', message: 'This field is required field' },
			{ type: 'pattern', message: 'Please enter a valid email' }
		],
		message: [
			{ type: 'minlength', message: 'Comment must be longer than 5 characters' },
			{ type: 'maxlength', message: 'Comment must be less than 1000 characters' }
		],
		hasAcceptedPrivacyPolicy: [
			{ type: 'required', message: 'This field is required field' },
		],
		hasAcceptedContactAgreement: [
			{ type: 'required', message: 'This field is required field' },
		],
	};
	readonly CompanyServiceName = CompanyServiceName;

	private readonly _internalSub = new Subscription();

	@HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
		const focused: HTMLElement | null = <HTMLElement>document.querySelector(':focus-visible');
		this.closeModal();
		if (focused) {
			focused.blur();
		}
	}

	constructor(
		readonly modalService: ModalService<ContactModalComponent>,
		private readonly sendEmailService: SendEmailService,
		private readonly recaptchaV3Service: ReCaptchaV3Service,
		private readonly router: Router,
		private readonly _cdRef: ChangeDetectorRef
	) {
		const element = document.body.querySelector('.grecaptcha-badge') as HTMLElement;
		if (element) {
			element.style.display = 'block';
		}
	}

	ngOnDestroy() {
		const element = document.body.querySelector('.grecaptcha-badge') as HTMLElement;
		if (element) {
			element.style.display = 'none';
		}

		this._internalSub.unsubscribe();
	}

	closeModal() {
		this.modalService.close();
	}

	onSubmit() {
		this._internalSub.add(
			this.recaptchaV3Service.execute('importantAction').pipe(
				tap((token: string) => this.form.get('g-recaptcha-response')?.setValue(token)),
				switchMap((token: string) =>
					this.form.getRawValue().companyServiceName === CompanyServiceName.Career
						? this.sendEmailService.sendCareersEmail(this.getContactData())
						: this.sendEmailService.sendSalesEmail(this.getContactData())
				)
			).subscribe(() => {
				this.form.reset();
				this.showSuccessModal();
				this.recaptchaV3Service.execute('');
			}, (error: IError) => {
				const code = error.error.errors[0].code === 'TYPE_EMAIL' ? 'INVALID_EMAIL' : error.error.errors[0].code;
				const errorText = errorVocabulary[code as keyof typeof errorVocabulary] || error.error.errors[0].message;
				this.showErrorModal(errorText);
			})
		);
	}

	showSuccessModal() {
		this.showSuccessModalState = true;
		this.showErrorModalState = false;
		this.submitErrorMessage = '';
		this._cdRef.detectChanges();
	}

	showErrorModal(error?: string) {
		this.showSuccessModalState = false;
		this.showErrorModalState = true;
		this.submitErrorMessage = error ?? '';
		this._cdRef.detectChanges();
	}

	resetError() {
		this.showErrorModalState = false;
		this.submitErrorMessage = '';
		this._cdRef.detectChanges();
	}

	hasFieldError(validationType: string, field: string): boolean {
		const formField = this.form.get(field);

		return formField
			? formField.hasError(validationType) && (formField.dirty || formField.touched)
			: false;
	}

	private _createForm() {
		return new FormGroup<ContactModalForm>({
			firstName: new FormControl<string>('', [Validators.required]),
			lastName: new FormControl<string>('', [Validators.required]),
			email: new FormControl<string>('', [Validators.required, Validators.pattern(emailRegex)]),
			companyName: new FormControl<string>('',),
			jobRole: new FormControl<string>('',),
			companySize: new FormControl<string>('',),
			companyServiceName: new FormControl<CompanyServiceName>(this._getDefaultCompanyServiceName()),
			comment: new FormControl<string>('', [Validators.maxLength(1000), Validators.minLength(5)]),
			hasAcceptedPrivacyPolicy: new FormControl<boolean>(false, [Validators.required]),
			hasAcceptedContactAgreement: new FormControl<boolean>(false, [Validators.required]),
			'g-recaptcha-response': new FormControl<string>('')
		});
	}

	private _getDefaultCompanyServiceName(): CompanyServiceName {
		if (this.router.url.includes('/careers')) {
			return CompanyServiceName.Career;
		}

		return CompanyServiceName.Service;
	}

	private getContactData(): ContactData {
		const data = this.form.getRawValue();

		return {
			firstName: data.firstName ?? '',
			lastName: data.lastName ?? '',
			email: data.email ?? '',
			companyServiceName: data.companyServiceName ?? CompanyServiceName.Service,
			'g-recaptcha-response': data['g-recaptcha-response'] ?? '',
			// optional fields
			...(data.companyName && { companyName: data.companyName }),
			...(data.jobRole && { jobRole: data.jobRole }),
			...(data.companySize && { companySize: data.companySize }),
			...(data.comment && { comment: data.comment }),
		};
	}
}
