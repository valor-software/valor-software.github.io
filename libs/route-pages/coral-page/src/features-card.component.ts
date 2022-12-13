import { Component, Input } from '@angular/core';

export interface IFeaturesCard {
  title: string;
  description: string;
  img?: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'features-card',
  templateUrl: './features-card.component.html'
})
export class FeaturesCardComponent {
  @Input() featureCard?: IFeaturesCard[];
}