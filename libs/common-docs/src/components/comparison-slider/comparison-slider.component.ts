import { Component, Input } from '@angular/core';
import 'img-comparison-slider';

export interface IComparisonSlider {
  beforeImg: string;
  afterImg: string;
  beforeText?: string;
  afterText?: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'comparison-slider',
  templateUrl: './comparison-slider.component.html'
})
export class ComparisonSliderComponent {
  @Input() comparisonImg?: IComparisonSlider;
  @Input() buttonClasses?: string;
}