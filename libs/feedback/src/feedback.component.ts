import {AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild} from '@angular/core';
import { feedBack, IFeedBack } from "./feedback.model";
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Mousewheel, SwiperOptions  } from "swiper";
SwiperCore.use([Mousewheel, Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'feedback',
    templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements AfterViewInit{
    @Input() set startFrom(value: string) {
        if (value) {
            let index = this.feedbackList.findIndex(item => item.author === value);
            this.startFromIndex = index > 0 ? index : 0;
        }

        if(this.swiperRef && this.startFromIndex) {
            this.swiperRef.swiperRef.slideTo(this.startFromIndex);
        }

        if(this.swiperRefResp && this.startFromIndex) {
            this.swiperRefResp.swiperRef.slideTo(this.startFromIndex);
        }
    };
    feedbackList: IFeedBack[] = feedBack;
    @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;
    @ViewChild("swiperRefResp", { static: false }) swiperRefResp?: SwiperComponent;
    startFromIndex?: number;

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

    ngAfterViewInit() {
        if(this.swiperRef && this.startFromIndex) {
            this.swiperRef.swiperRef.slideTo(this.startFromIndex);
        }

        if(this.swiperRefResp && this.startFromIndex) {
            this.swiperRefResp.swiperRef.slideTo(this.startFromIndex);
        }
    }
}