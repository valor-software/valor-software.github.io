import { Component, HostListener, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../../services/senEmail.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { errorVocabulary, IError } from './errors';
import { Router } from '@angular/router';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'contact-modal',
    templateUrl: './contactModal.component.html'
})
export class ContactModalComponent implements OnDestroy {
    _state?: Subscription;
    state?: boolean;
    form: UntypedFormGroup = new UntypedFormGroup({
        type: new UntypedFormControl('', [Validators.required]),
        email: new UntypedFormControl('', [Validators.required, Validators.email]),
        message: new UntypedFormControl('', [Validators.required, Validators.maxLength(1000), Validators.minLength(5)]),
        'g-recaptcha-response': new UntypedFormControl('')
    });
    data?: FormData;
    files?: File[];
    showSuccess = false;
    showError = false;
    $reCaptchaSub?: Subscription;
    errorMessage?: string;

    readonly validationMessages = {
        email: [
            { type: 'required', message: 'required field' },
            { type: 'email', message: 'Please enter a valid email' }
        ],
        message: [
            { type: 'required', message: 'required field' },
            { type: 'minlength', message: 'The message must be longer than 5 characters' },
            { type: 'maxlength', message: 'The message must be less than 1000 characters' }
        ],
    };

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
        const focused: HTMLElement | null = <HTMLElement>document.querySelector(':focus-visible');
        this.closeModal();
        if(focused){
            focused.blur();
        }
    }

    constructor(
        private modalService: ModalService<ContactModalComponent>,
        private sendEmailServ: SendEmailService,
        private recaptchaV3Service: ReCaptchaV3Service,
        private router: Router
    ) {
        this._state = this.modalService.state.subscribe((res: boolean) => {
            setTimeout(() => {
                this.state = res;
            });
        });

        const element = document.body.querySelector('.grecaptcha-badge') as HTMLElement;
        if (element) {
            element.style.display = 'block';
        }

        if (this.router.url.includes('/services') || this.router.url.includes('/clients')) {
            this.form.get('type')?.setValue('service');
        } else if (this.router.url.includes('/careers')) {
            this.form.get('type')?.setValue('career');
        }
    }

    closeModal() {
        this.modalService.close();
    }

    onSubmit() {
        this.$reCaptchaSub = this.recaptchaV3Service.execute('importantAction')
            .subscribe((token: string) => {
                this.form.get('g-recaptcha-response')?.setValue(token);
                this.sendEmailServ.sendEmail(this.form.value).subscribe(res => {
                    this.form.reset();
                    this.showSuccessModal();
                    this.recaptchaV3Service.execute('');
                }, (error: IError) => {
                    const code = error.error.errors[0].code === 'TYPE_EMAIL' ? 'INVALID_EMAIL' : error.error.errors[0].code;
                    const errorText = errorVocabulary[code as keyof typeof errorVocabulary] || error.error.errors[0].message;
                    this.showErrorModal(errorText);
                });
            });
    }

    showSuccessModal() {
        this.showSuccess = true;
        this.showError = false;
        this.errorMessage = '';
    }

    showErrorModal(error?: string) {
        this.showSuccess = false;
        this.showError = true;
        this.errorMessage = error;
    }

    resetError() {
        this.showError = false;
        this.errorMessage = '';
    }

    ngOnDestroy() {
        const element = document.body.querySelector('.grecaptcha-badge') as HTMLElement;
        if (element) {
            element.style.display = 'none';
        }
        this.$reCaptchaSub?.unsubscribe();
    }

    hasFieldError(validationType: string, field: string): boolean {
        const formField = this.form.get(field);
        if (formField) {
            return formField.hasError(validationType) && (formField.dirty || formField.touched);
        } else {
            return false;
        }
    }
}
