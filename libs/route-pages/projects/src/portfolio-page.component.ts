import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from "@valor-software/common-docs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'portfolio',
    templateUrl: 'portfolio-page.component.html'
})
export class PortfolioPageComponent {

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}