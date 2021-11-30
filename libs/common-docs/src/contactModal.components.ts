import { Component } from '@angular/core';
import { ModalService } from "./modal.service";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendEmailService } from "./senEmail.service";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'contact-modal',
    templateUrl: './contactModal.component.html'
})
export class ContactModalComponent {
    _state?: Subscription;
    state?: boolean;
    form: FormGroup = new FormGroup({
        type: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required]),
    });
    data?: FormData;
    files?: File[];
    showSuccess = false;
    showError = false;

    formData = [
        {
            name: 'type',
            type: 'radio',
            values: [
                {
                    value: 'service',
                    title: 'Services'
                },
                {
                    value: 'career',
                    title: 'Careers'
                },
                {
                    value: 'partner',
                    title: 'Partnerships & Sales'
                },
                {
                    value: 'other',
                    title: 'Other'
                }
            ]
        },
        {
            name: 'email',
            type: 'email',
            title: 'Email'
        },
        {
            name: 'message',
            type: 'text',
            title: 'Message'
        }
    ];

    constructor(
        private modalService: ModalService<ContactModalComponent>,
        private sendEmailServ: SendEmailService
    ) {
        this._state = this.modalService.state.subscribe((res: boolean) => {
            setTimeout(() => {
                this.state = res;
            });
        });
    }

    closeModal() {
        this.modalService.close();
    }

    onSubmit() {
        this.sendEmailServ.sendEmail(this.form.value).subscribe(res => {
            this.form.reset();
            this.showSuccessModal();
        }, error => {
            this.showErrorModal();
            console.log(error);
        });
    }

    addFiles(files: File[] | []) {
        this.files = files;
    }

    showSuccessModal() {
        this.showSuccess = true;
        this.showError = false;
    }

    showErrorModal() {
        this.showSuccess = false;
        this.showError = true;
    }
 }
