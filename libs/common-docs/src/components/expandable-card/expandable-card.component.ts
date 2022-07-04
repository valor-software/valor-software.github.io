import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';


export interface IEexpandableCard {
  title: string;
  list: string[];
  imgSource: string;
  isExpanded?: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'expandable-card',
  templateUrl: './expandable-card.component.html',
  animations: [
    trigger(
      'enterBigCard', [
      transition(':enter', [
        style({ transform: 'translate(50%, 100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translate(0, 0)', opacity: 1, })),
      ]),
    ]),
    trigger(
      'enterSmallCard', [
      transition(':enter', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms ease-in-out'),
      ])
    ])
  ],
})
export class ExpandableCardComponent implements OnInit {
  @Input() cards?: IEexpandableCard[];



  ngOnInit(): void {
    if (this.cards && this.cards?.length > 0) {
      this.cards[0].isExpanded = true;
    }
  }

  selectCard(index: number) {
    if (this.cards && this.cards.length) {
      this.cards.forEach((element, i) => {
        element.isExpanded = i === index ? true : false;
      });
    }
  }
}