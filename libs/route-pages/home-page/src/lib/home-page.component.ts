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

const technologiesList = [
    {
        id: 'angular',
        img: 'assets/img/technologies/angular.png',
        active: false
    },
    {
        id: 'react',
        img: 'assets/img/technologies/react.png',
        active: false
    },
    {
        id: 'react_native',
        img: 'assets/img/technologies/react_native.png',
        active: false
    },
    {
        id: 'ruby',
        img: 'assets/img/technologies/ruby.png',
        active: false
    },
    {
        id: 'vue',
        img: 'assets/img/technologies/vue.png',
        active: false
    },
    {
        id: 'nest_js',
        img: 'assets/img/technologies/nest_js.png',
        active: false
    },
    {
        id: 'python',
        img: 'assets/img/technologies/python.png',
        active: false
    },
    {
        id: 'go',
        img: 'assets/img/technologies/go.png',
        active: false
    },
    {
        id: 'ionic',
        img: 'assets/img/technologies/ionic.png',
        active: false
    },
    {
        id: 'native_script',
        img: 'assets/img/technologies/native_script.png',
        active: false
    },
    {
        id: 'google',
        img: 'assets/img/technologies/google_cloud.png',
        active: false
    },
    {
        id: 'firebase',
        img: 'assets/img/technologies/firebase.png',
        active: false
    },
    {
        id: 'heroku',
        img: 'assets/img/technologies/heroku.png',
        active: false
    },
    {
        id: 'aws',
        img: 'assets/img/technologies/aws.png',
        active: false
    },
    {
        id: 'lang',
        img: 'assets/img/technologies/lang.png',
        active: false
    },
    {
        id: 'js',
        img: 'assets/img/technologies/java_script.png',
        active: false
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
    technologiesList: typeof technologiesList = technologiesList;

    constructor() {
    }

    checkIndex(index: number): boolean {
        index++;
        return !!(index && !(index % 4));
    }

    sortProjects(technology: {id: string, active: boolean, img: string}): void {
        this.technologiesList.map( item => {
            item.active = false;
        });

        technology.active = true;
    }
}
