import {AfterViewInit, Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions  } from "swiper";
import { SwiperEvents } from 'swiper/types';
import { SwiperComponent } from "swiper/angular";
import { NpmStatisticService } from "./getNpmStatistic.service";
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
        img: 'assets/img/technologies/not_active/angular.png',
        activeImg: 'assets/img/technologies/active/angular.png',
        blockedImg: 'assets/img/technologies/blocked/angular.png',
        active: true,
        disabled: false
    },
    {
        id: 'react',
        img: 'assets/img/technologies/not_active/react.png',
        activeImg: 'assets/img/technologies/active/react.png',
        blockedImg: 'assets/img/technologies/blocked/react.png',
        active: false,
        disabled: false
    },
    {
        id: 'react_native',
        img: 'assets/img/technologies/not_active/react_native.png',
        activeImg: 'assets/img/technologies/active/react_native.png',
        blockedImg: 'assets/img/technologies/blocked/react_native.png',
        active: false,
        disabled: false
    },
    {
        id: 'ruby',
        img: 'assets/img/technologies/not_active/ruby.png',
        activeImg: 'assets/img/technologies/active/ruby.png',
        blockedImg: 'assets/img/technologies/blocked/ruby.png',
        active: false,
        disabled: false
    },
    {
        id: 'vue',
        img: 'assets/img/technologies/not_active/vue.png',
        activeImg: 'assets/img/technologies/active/vue.png',
        blockedImg: 'assets/img/technologies/blocked/vue.png',
        active: false,
        disabled: false
    },
    {
        id: 'nest_js',
        img: 'assets/img/technologies/not_active/nest_js.png',
        activeImg: 'assets/img/technologies/active/nest_js.png',
        blockedImg: 'assets/img/technologies/blocked/nest_js.png',
        active: false,
        disabled: false
    },
    {
        id: 'python',
        img: 'assets/img/technologies/not_active/python.png',
        activeImg: 'assets/img/technologies/active/python.png',
        blockedImg: 'assets/img/technologies/blocked/python.png',
        active: false,
        disabled: false
    },
    {
        id: 'go',
        img: 'assets/img/technologies/not_active/go.png',
        activeImg: 'assets/img/technologies/active/go.png',
        blockedImg: 'assets/img/technologies/blocked/go.png',
        active: false,
        disabled: false
    },
    {
        id: 'ionic',
        img: 'assets/img/technologies/not_active/ionic.png',
        activeImg: 'assets/img/technologies/active/ionic.png',
        blockedImg: 'assets/img/technologies/blocked/ionic.png',
        active: false,
        disabled: false
    },
    {
        id: 'native_script',
        img: 'assets/img/technologies/not_active/native_script.png',
        activeImg: 'assets/img/technologies/active/native_script.png',
        blockedImg: 'assets/img/technologies/blocked/native_script.png',
        active: false,
        disabled: false
    },
    {
        id: 'google',
        img: 'assets/img/technologies/not_active/google_cloud.png',
        activeImg: 'assets/img/technologies/active/google_cloud.png',
        blockedImg: 'assets/img/technologies/blocked/google_cloud.png',
        active: false,
        disabled: false
    },
    {
        id: 'firebase',
        img: 'assets/img/technologies/not_active/firebase.png',
        activeImg: 'assets/img/technologies/active/firebase.png',
        blockedImg: 'assets/img/technologies/blocked/firebase.png',
        active: false,
        disabled: false
    },
    {
        id: 'heroku',
        img: 'assets/img/technologies/not_active/heroku.png',
        activeImg: 'assets/img/technologies/active/heroku.png',
        blockedImg: 'assets/img/technologies/blocked/heroku.png',
        active: false,
        disabled: false
    },
    {
        id: 'aws',
        img: 'assets/img/technologies/not_active/aws.png',
        activeImg: 'assets/img/technologies/active/aws.png',
        blockedImg: 'assets/img/technologies/blocked/aws.png',
        active: false,
        disabled: false
    },
    {
        id: 'lang',
        img: 'assets/img/technologies/not_active/lang.png',
        activeImg: 'assets/img/technologies/active/lang.png',
        blockedImg: 'assets/img/technologies/blocked/lang.png',
        active: false,
        disabled: false
    },
    {
        id: 'js',
        img: 'assets/img/technologies/not_active/java_script.png',
        activeImg: 'assets/img/technologies/active/java_script.png',
        blockedImg: 'assets/img/technologies/blocked/java_script.png',
        active: false,
        disabled: false
    }
];

const projectsList = [
    {
        labels: ['angular', 'ruby'],
        name: 'test',
        img: 'assets/img/projects/project_1.png'
    },
    {
        labels: ['angular', 'firebase'],
        name: 'test',
        img: 'assets/img/projects/project_2.png'
    },
    {
        labels: ['angular', 'js'],
        name: 'test',
        img: 'assets/img/projects/project_1.png'
    },
    {
        labels: ['angular'],
        name: 'test',
        img: 'assets/img/projects/project_2.png'
    },
    {
        labels: ['angular', 'lang'],
        name: 'test',
        img: 'assets/img/projects/project_2.png'
    },
    {
        labels: ['lang'],
        name: 'test_1',
        img: 'assets/img/projects/project_1.png'
    },
    {
        labels: ['firebase', 'js'],
        name: 'test_2',
        img: 'assets/img/projects/project_2.png'
    },
    {
        labels: ['native_script'],
        name: 'test_3',
        img: 'assets/img/projects/project_1.png'
    },
    {
        labels: ['google'],
        name: 'test_4',
        img: 'assets/img/projects/project_2.png'
    },
    {
        labels: ['react_native'],
        name: 'test_5',
        img: 'assets/img/projects/project_1.png'
    },
    {
        labels: ['ruby'],
        name: 'test_6',
        img: 'assets/img/projects/project_2.png'
    },
    {
        labels: ['angular'],
        name: 'test_7',
        img: 'assets/img/projects/project_1.png'
    }
];

const ServicesModel = [
    {
        title: 'Design',
        img: 'assets/img/bg-img/services_img/services_1.svg'
    },
    {
        title: 'Software Engineering',
        img: 'assets/img/bg-img/services_img/services_2.svg'
    },
    {
        title: 'Quality Assurance',
        img: 'assets/img/bg-img/services_img/services_3.svg'
    },
    {
        title: 'DevOps',
        img: 'assets/img/bg-img/services_img/services_4.svg'
    },
    {
        title: 'Maintenance & Support',
        img: 'assets/img/bg-img/services_img/services_5.svg'
    },
    {
        title: 'Product Ownership & Project Mgmt.',
        img: 'assets/img/bg-img/services_img/services_6.svg'
    }
];

const OpenSourceSlidesModel = [
    {
        title: 'We built<br> ngx-bootstrap<br> library',
        description: 'Bootstrap components powered by Angular',
        list: ['Flexibility', 'Tinker-friendly code', 'Thorough documentation', 'Lots of demo'],
        name: 'ngx-bootstrap',
        img: 'assets/img/bg-img/open-source/ngx-bootstrap.svg',
        link: 'https://valor-software.com/ngx-bootstrap/#/',
        downloads: 0
    },
    {
        title: 'We sponsor<br>NestJS<br> framework',
        description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications',
        list: ['Modular architecture', 'Scalability', 'Compatibility with server-side apps', 'Orientation on endpoints'],
        name: 'NestJS',
        img: 'assets/img/bg-img/open-source/nestjs.svg',
        link: 'https://nestjs.com/',
        downloads: 0
    },
    {
        title: 'We contribute<br>to NativeScript',
        description: 'Empower JavaScript with native APIs. Liberate your development by using platform APIs directly without leaving your love for JavaScript aside.',
        list: ['Flexible', 'Regular updates', 'Compatible', 'Inspires animations'],
        name: 'NativeScript',
        img: 'assets/img/bg-img/open-source/nativescript.svg',
        link: 'https://nativescript.org/partners/',
        downloads: 0
    }
];

const feedBack = [
    {
        project: 'CareerBuilder',
        text: 'From the start of our relationship with Valor software we saw a fundamental shift in our development practices. The attitude of fully integrating with the team and behaving as a co-owner of the platform was a refreshing departure from classical off shore. I highly recommend Valor to everyone I talk to.',
        img: 'assets/img/feedback/careerBuilder.jpg',
        author: 'Zackary Chapple',
        position: 'Principal Architect'
    },
    {
        project: 'Dollar Street',
        text: 'Thanks "Valor Software" for awesome work! I especially liked your openness and desire to share experience. The best of Valor, is that they never say "It\'simpossible", they always find a good approaches to satisfy the customers.',
        img: 'assets/img/feedback/dollarStreet.jpg',
        author: 'Anna Rosling',
        position: 'Mother of Dollar Street'
    },
    {
        project: 'Souqalmal',
        text: 'I really enjoyed working with Dima! He\'s an excellent developer and he really helped us build our new product, using the latest technologies out there. Dima is very knowledgeable and passionate and he\'s also striving to be up to date with the latest developments in his field. He\'s a true JS ninja!',
        img: 'assets/img/feedback/soqualmal.jpg',
        author: 'Iraklis Alexopoulos',
        position: 'Tech Team Lead'
    },
    // {
    //     project: 'Priceshredder',
    //     text: 'Great team to work with over the last 10 months.',
    //     img: 'assets/img/feedback/priceshredder.jpg',
    //     author: 'Basil Sabah',
    //     position: 'CEO'
    // },
    {
        project: 'Gapminder Offline',
        text: 'What we can tell you is that Valor Software is very, very knowledgeable and very helpful. We think what sticks out the most is their capacity to find solutions instead of just saying what cannot be done. They know how to develop any feature that we request, and they are very good at user experience. They also know how to communicate with non-tech people. I think that makes them quite special because any client can communicate with them.',
        img: 'assets/img/feedback/gapminder.jpg',
        author: 'Ola Rosling',
        position: 'CEO of Gapminder'
    },
    {
        project: 'TablesReady',
        text: 'Dima and team were fantastic to work with - smart, reliable, and familiar with a variety of web technologies. They were quick to pickup new concepts and extremely proactive in developing features.',
        img: 'assets/img/feedback/tablesReady.jpg',
        author: 'Robert Shaw',
        position: 'CEO at Table\'s Ready'
    }
];


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'home-page',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

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
    verticalSwiperConfig: SwiperOptions = {
        direction: 'vertical',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 40,
        pagination: {
            clickable: true
        },
    };
    feedBackCarousel: SwiperOptions = {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 40,
        loop: true,
        autoHeight: true
    };
    technologiesList: typeof technologiesList = technologiesList;
    projectList = projectsList;
    sortedProjects?: {labels: string[], name: string, img: string}[];
    sortedProjectsAmount = 4;
    showSocial = false;
    services: typeof ServicesModel = ServicesModel;
    openSourceSlides: typeof OpenSourceSlidesModel = OpenSourceSlidesModel;
    feedBackList: typeof feedBack = feedBack;
    currentFeedBackIndex = 0;

    constructor(
        private npmCounts: NpmStatisticService,
        private cdr: ChangeDetectorRef
    ) {
        this.sortedProjectsAmount = window.innerWidth >= 768 ? 4 : 2;
        this.initDisabledTechnologies();
        this.sortProjects('angular');
        this.setNpmStatistic();
    }

    setNpmStatistic() {
        this.npmCounts.getPackageDownloads('ngx-bootstrap', 'last-month').subscribe(res => {
            this.openSourceSlides?.map(item => {
                if (item.name === 'ngx-bootstrap') {
                    item.downloads = res.downloads;
                }
            });
        }, error => {
            console.log('error', error);
        });
    }

    initDisabledTechnologies() {
        this.technologiesList.forEach(techno => {
            const res = this.projectList.find(item => item.labels.includes(techno.id));
            if (!res) {
                techno.disabled = true;
            }
        });
    }

    checkIndex(index: number): boolean {
        index++;
        return !!(index && !(index % 4));
    }

    setActiveTechnology(id: string): boolean {
        this.technologiesList.map( item => {
            item.active = !item.disabled && item.id === id;
        });

        return this.technologiesList.some(item => item.active);
    }

    sortProjects(id: string): void {
        if (this.setActiveTechnology(id)) {
            this.sortedProjects = this.projectList?.filter(item => item.labels.includes(id))?.slice(0, this.sortedProjectsAmount);
        }
    }

    nextSlide() {
        this.swiperRef?.swiperRef.slideNext();
    }

    prevSlide() {
        this.swiperRef?.swiperRef.slidePrev();
    }

    showIndex(value: any) {
        this.currentFeedBackIndex = value.activeIndex;
        this.cdr.detectChanges();
    }
}
