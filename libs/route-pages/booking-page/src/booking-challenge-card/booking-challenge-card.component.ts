import { Component, Input } from '@angular/core';

export interface IDefaultValuesText {
  title?: string;
  subtitle?: string;
  description?: string[];
}

export interface IBookingChallengeCard {
  challenge: IDefaultValuesText;
  solution: IDefaultValuesText;
  src?: string;
  footer?: IChallengeFooter;
}

export interface IChallengeFooter extends IDefaultValuesText {
  list?: string[];
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'booking-challenge-card',
  templateUrl: './booking-challenge-card.component.html'
})
export class BookingChallengeCardComponent {
  @Input() challengeCards!: IBookingChallengeCard[];


}