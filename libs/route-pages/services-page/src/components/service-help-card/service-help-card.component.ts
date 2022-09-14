import { Component } from '@angular/core';
import { ModalService, ContactModalComponent } from '@valor-software/common-docs';


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