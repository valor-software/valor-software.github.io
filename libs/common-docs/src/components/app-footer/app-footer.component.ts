import { Component } from '@angular/core';
import { ModalService } from "../../services/modal.service";
import { ContactModalComponent } from "../contact-modal/contactModal.components";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-footer',
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}
