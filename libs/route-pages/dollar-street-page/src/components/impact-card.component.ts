import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'impact-card',
  templateUrl: './impact-card.component.html'
})
export class ImpactCardComponent {
  @Input() impactCardList?: string[];

}