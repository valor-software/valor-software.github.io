import { Component } from '@angular/core';
import { ModalService } from "../../../services/modal.service";
import { ContactModalComponent } from "../../contact-modal/contactModal.components";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'service-help-card',
  templateUrl: './service-help-card.component.html'
})
export class ServiceHelpCardCardComponent {
  constructor(
    private modalService: ModalService<ContactModalComponent>
) {}
  openModal() {
    this.modalService.open(ContactModalComponent);
}
}