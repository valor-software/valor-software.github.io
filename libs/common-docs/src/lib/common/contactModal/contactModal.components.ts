import { Component } from '@angular/core';
import { ModalService } from "../services/modal.service";
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

    showForm() {
        console.log(this.form.value);
    }

    onSubmit() {
        this.sendEmailServ.sendEmail(this.form.value).subscribe(res => {
            this.form.reset();
            this.closeModal();
        }, error => {
            console.log(error);
        });
    }

    // uploadDocuments(event: Event) {
    //     this.data = new FormData();
    //     const files = (event.target as HTMLInputElement).files;
    //     if (files?.length) {
    //         for (const filesKey in files) {
    //             this.data.append('file', files[filesKey]);
    //         }
    //     }
    //
    //     this.data.append('email', this.form.get('email')?.value || '');
    //     this.data.append('message', this.form.get('message')?.value || '');
    //
    //
    //     // this.vhrFormData = new FormData();
    //     // const file: File = <File>event.target.files[0];
    //     // this.vhrFormData.append('file', file);
    //     // this.vhrFormData.append('DocumentType', 'RegistrationDocument');
    // }
}
