import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { feedBack, IFeedBack } from './feedback.model';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Mousewheel, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Mousewheel, Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'feedback',
    templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
    @Input() set startFrom(value: string) {
        if (value) {
            this.feedbackList = feedBack.filter(item => item.author === value);
        }
    };

    feedbackList: IFeedBack[] = feedBack;
    @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
    @ViewChild('swiperRefResp', { static: false }) swiperRefResp?: SwiperComponent;

    feedBackCarousel: SwiperOptions = {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 40,
        mousewheel: {
            releaseOnEdges: true
        },
        loop: false
    };
    feedBackRespConfig: SwiperOptions = {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 40,
        loop: false,
        mousewheel: {
            releaseOnEdges: true
        },
        autoHeight: true,
        pagination: {
            clickable: true
        }
    };
    currentFeedBackIndex = 0;


    constructor(
        private cdr: ChangeDetectorRef,
    ) {}

    showIndex(value: any) {
        this.currentFeedBackIndex = value.activeIndex;
        this.cdr.detectChanges();
    }

    nextSlide() {
        this.swiperRef?.swiperRef.slideNext();
    }

    prevSlide() {
        this.swiperRef?.swiperRef.slidePrev();
    }
}
