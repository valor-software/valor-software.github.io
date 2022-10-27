import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService, ContactModalComponent } from '@valor-software/common-docs';

export interface IHierarchyServiceCard {
  title: string;
  description: string;
  subtitle: string;
  items: { title: string, subItems?: string[] }[];
  button: { title: string, url?: string };
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hierarchy-service-card',
  templateUrl: './hierarchy-service-card.component.html'
})
export class HierarchyServiceCardComponent {
  @Input() hierarchyServiceCard?: IHierarchyServiceCard[];


  constructor(
    private modalService: ModalService<ContactModalComponent>,
    private router: Router
  ) { }
  
  onClick(url?: string) {
    if (url) {
      window.open(url, '_blank');
      return;
    }
    this.modalService.open(ContactModalComponent);
  }
}