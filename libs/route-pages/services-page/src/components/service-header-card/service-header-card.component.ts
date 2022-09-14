import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService, ContactModalComponent } from '@valor-software/common-docs';

export interface IServicesHeader {
  title: string;
  descriptions: string[];
  img: string;
  button: {
    title: string;
    url?: string;
  },
  bradCrumb: {
    title: string;
    path: string;
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'service-header-card',
  templateUrl: './service-header-card.component.html'
})
export class ServiceHeaderCardComponent implements OnChanges {

  @Input() servicesHeader?: IServicesHeader;

  changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
    {
      path: 'services',
      title: 'Services',
    }
  ];

  constructor(
    private modalService: ModalService<ContactModalComponent>,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.servicesHeader && this.servicesHeader) {
      this.changeBreadCrumbTitle = [
        {
          path: 'services',
          title: 'Services',
        },
        {
          path: this.servicesHeader.bradCrumb.path,
          title: this.servicesHeader.bradCrumb.title
        }
      ];

    }
  }
  onClick() {
    if (this.servicesHeader && this.servicesHeader.button.url) {
      this.router.navigate([this.servicesHeader.button.url]);
      return;
    }
    this.modalService.open(ContactModalComponent);
  }
}