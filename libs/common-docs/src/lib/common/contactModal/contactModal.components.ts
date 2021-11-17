import { Component } from '@angular/core';
import { ModalService } from "../services/modal.service";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        files: new FormControl(''),
    });

    formDate = [
        {
            name: 'type',
            type: 'radio',
            values: [
                {
                    value: 'services',
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
        private modalService: ModalService<ContactModalComponent>
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
        console.log(this.form.value);
    }
}