import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { UtilService } from '../../services/utils.service';

export interface IDefaultValuesText {
  title?: string;
  description?: string[];
}

export interface IChallengeCard {
  challenge: IDefaultValuesText;
  solution: IDefaultValuesText;
  src?: string;
  smallImg?: boolean;
  imgCarrousel?: string[];
  comparisonImg?: IComparisonImage;
  footer?: IChallengeFooter;
  subSection?: IChallengeSubSection;
}

export interface IChallengeFooter extends IDefaultValuesText {
  list?: string[];
}

export interface IComparisonImage {
  before: {
    src: string;
    title?: string;
  },
  after: {
    src: string;
    title?: string;
  }
}
export interface IChallengeSubSection extends IDefaultValuesText {
  imgs?: {
    title: string,
    src: string,
  }[];
  video?: string;
  video_poster?: string;
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

  constructor(
    public utilService: UtilService
  ) { }

}