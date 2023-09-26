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
const textRegex = /^[a-zA-Z0-9\-_ ']+$/;

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
			{ type: 'minlength', message: 'Field must be longer than 2 characters' },
			{ type: 'maxlength', message: 'Field must be less than 30 characters' },
			{ type: 'pattern', message: 'Please enter valid data' }
		],
		lastName: [
			{ type: 'required', message: 'This field is required field' },
			{ type: 'minlength', message: 'Field must be longer than 2 characters' },
			{ type: 'maxlength', message: 'Field must be less than 30 characters' },
			{ type: 'pattern', message: 'Please enter valid data' }
		],
		companyName: [
			{ type: 'minlength', message: 'Field must be longer than 2 characters' },
			{ type: 'maxlength', message: 'Field must be less than 30 characters' },
			{ type: 'pattern', message: 'Please enter valid data' }
		],
		jobRole: [
			{ type: 'minlength', message: 'Field must be longer than 2 characters' },
			{ type: 'maxlength', message: 'Field must be less than 30 characters' },
			{ type: 'pattern', message: 'Please enter valid data' }
		],
		companySize: [
			{ type: 'minlength', message: 'Field must be longer than 2 characters' },
			{ type: 'maxlength', message: 'Field must be less than 30 characters' },
			{ type: 'pattern', message: 'Please enter valid data' }
		],
		email: [
			{ type: 'required', message: 'This field is required field' },
			{ type: 'pattern', message: 'Please enter a valid email' }
		],
		comment: [
			{ type: 'minlength', message: 'Field must be longer than 5 characters' },
			{ type: 'maxlength', message: 'Field must be less than 1000 characters' }
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
			firstName: new FormControl<string>('', [
				Validators.required,
				Validators.maxLength(30),
				Validators.minLength(2),
				Validators.pattern(textRegex)
			]),
			lastName: new FormControl<string>('', [
				Validators.required,
				Validators.maxLength(30),
				Validators.minLength(2),
				Validators.pattern(textRegex)
			]),
			email: new FormControl<string>('', [
				Validators.required, Validators.pattern(emailRegex)
			]),
			companyName: new FormControl<string>('', [
				Validators.maxLength(30),
				Validators.minLength(2),
				Validators.pattern(textRegex)
			]),
			jobRole: new FormControl<string>('', [
				Validators.maxLength(30),
				Validators.minLength(2),
				Validators.pattern(textRegex)
			]),
			companySize: new FormControl<string>('', [
				Validators.maxLength(30),
				Validators.minLength(2),
				Validators.pattern(textRegex)
			]),
			companyServiceName: new FormControl<CompanyServiceName>(this._getDefaultCompanyServiceName()),
			comment: new FormControl<string>('', [
				Validators.maxLength(2000), Validators.minLength(5)
			]),
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
			firstName: data.firstName?.trim() ?? '',
			lastName: data.lastName?.trim() ?? '',
			email: data.email?.trim() ?? '',
			companyServiceName: data.companyServiceName ?? CompanyServiceName.Service,
			'g-recaptcha-response': data['g-recaptcha-response'] ?? '',
			// optional fields
			...(data.companyName?.trim() && { companyName: data.companyName?.trim() }),
			...(data.jobRole?.trim() && { jobRole: data.jobRole?.trim() }),
			...(data.companySize?.trim() && { companySize: data.companySize?.trim() }),
			...(data.comment?.trim() && { comment: data.comment?.trim() }),
		};
	}
}
