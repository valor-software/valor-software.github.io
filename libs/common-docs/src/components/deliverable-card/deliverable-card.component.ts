import { Component, Input } from '@angular/core';

export type DeliverableCard = {
  title: string;
  descriptions: string[];
  imgs: string[];
  impact: string[][];
  fullWidthImg?: boolean;
};

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'deliverable-card',
  templateUrl: './deliverable-card.component.html'
})



export class DeliverableCardComponent {
  @Input() deliverable?: DeliverableCard;

}