import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetVerticalServices } from '../../services/getVerticalServices.service';

export interface IVerticalServicesCard {
  title: string;
  img: string;
  description?: string;
  items: { title: string, url?: string, highlight?: boolean }[];
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'vertical-services-card',
  templateUrl: './vertical-services-card.component.html'
})
export class VerticalServicesCardComponent implements OnDestroy {
  verticalServiceCards?: IVerticalServicesCard[];
  verticalServiceCards$: Subscription;

  constructor(
   private getVerticalService: GetVerticalServices
  ){
  this.verticalServiceCards$ = this.getVerticalService.getVerticalServices().subscribe((services)=>{
      this.verticalServiceCards = services;
    });
  }

  ngOnDestroy(): void {
      this.verticalServiceCards$.unsubscribe();
  }

}