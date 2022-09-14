import { Component, Input } from '@angular/core';

export interface ITraitsCard {
  title: string;
  img: string;
  description?: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'traits-cards',
  templateUrl: './traits-cards.component.html'
})
export class TraitsCardComponent {
  @Input() traitCards?: ITraitsCard[];
  @Input() twoPerRow?: boolean = false;
}