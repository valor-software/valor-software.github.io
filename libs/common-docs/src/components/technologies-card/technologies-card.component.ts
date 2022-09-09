import { Component, Input } from '@angular/core';


export interface ITechnologiesCard {
  title?: string;
  technologies: ITechnologies[];
  smJustify: 'center' | 'start' | 'between';
  mdJustify?: 'center' | 'start' | 'between';
  lgJustify: 'center' | 'start' | 'between';
}

export interface ITechnologies {
  title: string;
  src: string;
  wrapText?: boolean;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'technologies-card',
  templateUrl: './technologies-card.component.html'
})
export class TechnologiesCardComponent {
  @Input() technologiesCards?: ITechnologiesCard[];
}