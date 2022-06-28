import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

export interface IDefaultValuesText {
  title?: string;
  description?: string;
}

export interface IChallengeCard {
  challenge: IDefaultValuesText;
  solution: IDefaultValuesText;
  src?: string;
  imgCarrousel?: string[];
  footer?: IChallengeFooter;
  subSection?: IChallengeSubSection;
}

export interface IChallengeFooter extends IDefaultValuesText {
  list?: string[];
}

export interface IChallengeSubSection extends IDefaultValuesText {
  imgs: {
    title: string,
    src: string,
  }[];
}
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'challenge-card',
  templateUrl: './challenge-card.component.html'
})
export class ChallengeCardComponent {
  @Input() challengeCard?: IChallengeCard;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
    mousewheel: {
      releaseOnEdges: true
    },
    initialSlide: 0,
    slideToClickedSlide: true,
    pagination: {
      clickable: true
    },
  };
}