import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService, ContactModalComponent } from '@valor-software/common-docs';
import { Subscription } from 'rxjs';
import { GetVerticalServices } from '../../services/getVerticalServices.service';

export interface IVerticalServicesCard {
  title: string;
  img: string;
  description?: string;
  items: { title: string, url?: string, highlight?: boolean }[];
  button?: { title: string, url?: string};
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'vertical-services-card',
  templateUrl: './vertical-services-card.component.html'
})
export class VerticalServicesCardComponent implements OnDestroy, AfterViewInit {
  @Input() isLinkList?: boolean;
  @Input() isServiceList?: boolean;
  @Input() verticalServiceCards?: IVerticalServicesCard[];
  verticalServiceCards$?: Subscription;

  constructor(
    private getVerticalService: GetVerticalServices,
    private modalService: ModalService<ContactModalComponent>,
    private router: Router
  ) {

  }

  ngAfterViewInit(): void {
    if (this.isServiceList) {
      this.verticalServiceCards$ = this.getVerticalService.getVerticalServices().subscribe((services) => {
        this.verticalServiceCards = services;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.verticalServiceCards$) {
      this.verticalServiceCards$.unsubscribe();
    }
  }

    onClick(url?: string) {
    if (url) {
      this.router.navigate([url]);
      return;
    }
    this.modalService.open(ContactModalComponent);
  }

}