import { Component } from '@angular/core';
import { ModalService } from "./modal.service";
import { ContactModalComponent } from "./contactModal.components";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'top-menu',
    templateUrl: './top-menu.component.html'
})
export class TopMenuComponent {
    showClientsRoute = false;
    showBurgerMenu = false;

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    toggleClientsRoute(value?: boolean) {
        this.showClientsRoute = value !== undefined ? !!value : !this.showClientsRoute;
    }

    openModal() {
        this.modalService.open(ContactModalComponent);
    }

}
