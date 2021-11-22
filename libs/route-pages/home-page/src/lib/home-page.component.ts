import { Component } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions  } from "swiper";
SwiperCore.use([Pagination]);

const slideModel = [
    {
        title: '<span>To nurture</span> professional<br>growth',
        list: [
            'Culture of self-development',
            'Time for skill-up as part of the schedule',
            'Internal and external knowledge-sharing',
            'Contribution to open-source'
        ],
        imgSource: 'assets/img/bg-img/landing_slide/slide_1.svg'
    },
    {
        title: '<span>To make</span> outsourcing<br><span>more</span> human',
        list: [
            'Increased communication',
            'Decreased bureaucracy',
            'Flat company structure',
            'We’re all partners, inside the company and with clients'
        ],
        imgSource: 'assets/img/bg-img/landing_slide/slide_2.svg'
    },
    {
        title: '<span>To</span> make <span>the most<br> complex </span>ideas<span> live</span>',
        list: [
            'Pushing technology to its limits',
            'Building unique expertise within the company',
            'Mastering edge technologies',
            'Always finding the way to meet clients’ business needs'
        ],
        imgSource: 'assets/img/bg-img/landing_slide/slide_3.svg'
    }
];


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'home-page',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    slides: typeof slideModel = slideModel;
    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 1,
        slideToClickedSlide: true,
        pagination: {
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1.4
            },
            1280: {
                slidesPerView: 1.8
            },
        }
    };


    constructor() {
    }
}
