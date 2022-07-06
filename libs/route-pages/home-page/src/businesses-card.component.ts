import { Component, Input } from '@angular/core';

export interface IBusinessesCard {
  title: string;
  description: string[];
  buttonTitle: string;
  route: string;
  imgSource: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'businesses-card',
  templateUrl: './businesses-card.component.html',

})
export class BusinessesCardComponent {
  @Input() cards?: IBusinessesCard[];
}