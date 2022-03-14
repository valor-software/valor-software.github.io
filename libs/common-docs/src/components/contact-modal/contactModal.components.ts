import {Component, OnDestroy} from '@angular/core';
import { ModalService } from "../../services/modal.service";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendEmailService } from "../../services/senEmail.service";
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { IError, errorVocabulary} from './errors';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'contact-modal',
    templateUrl: './contactModal.component.html'
})
export class ContactModalComponent implements OnDestroy {
    _state?: Subscription;
    state?: boolean;
    form: FormGroup = new FormGroup({
        type: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required, Validators.maxLength(1000), Validators.minLength(5)]),
        'g-recaptcha-response': new FormControl('')
    });
    data?: FormData;
    files?: File[];
    showSuccess = false;
    showError = false;
    $reCaptchaSub?: Subscription;
    errorMessage?: string;

    constructor(
        private modalService: ModalService<ContactModalComponent>,
        private sendEmailServ: SendEmailService,
        private recaptchaV3Service: ReCaptchaV3Service
    ) {
        this._state = this.modalService.state.subscribe((res: boolean) => {
            setTimeout(() => {
                this.state = res;
            });
        });

        const element = document.body.querySelector('.grecaptcha-badge') as HTMLElement;
        if (element){
            element.style.display = 'block';
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
                    const errorText = errorVocabulary[error.error.errors[0].code as keyof typeof errorVocabulary] || error.error.errors[0].message;
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

    ngOnDestroy() {
        const element = document.body.querySelector('.grecaptcha-badge') as HTMLElement;
        if (element){
            element.style.display = 'none';
        }
        this.$reCaptchaSub?.unsubscribe();
    }
}
