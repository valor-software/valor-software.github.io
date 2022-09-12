import { Component, Input } from '@angular/core';


export interface ITechnologiesCard {
  title?: string;
  technologies: ITechnologies[];
  smJustify: 'center' | 'start' | 'between' | 'evenly';
  mdJustify?: 'center' | 'start' | 'between'| 'evenly';
  lgJustify: 'center' | 'start' | 'between'| 'evenly';
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