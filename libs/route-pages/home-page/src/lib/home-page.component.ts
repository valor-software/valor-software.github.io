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
        active: true,
        disabled: false
    },
    {
        id: 'react',
        img: 'assets/img/technologies/react.png',
        active: false,
        disabled: false
    },
    {
        id: 'react_native',
        img: 'assets/img/technologies/react_native.png',
        active: false,
        disabled: false
    },
    {
        id: 'ruby',
        img: 'assets/img/technologies/ruby.png',
        active: false,
        disabled: false
    },
    {
        id: 'vue',
        img: 'assets/img/technologies/vue.png',
        active: false,
        disabled: false
    },
    {
        id: 'nest_js',
        img: 'assets/img/technologies/nest_js.png',
        active: false,
        disabled: false
    },
    {
        id: 'python',
        img: 'assets/img/technologies/python.png',
        active: false,
        disabled: false
    },
    {
        id: 'go',
        img: 'assets/img/technologies/go.png',
        active: false,
        disabled: false
    },
    {
        id: 'ionic',
        img: 'assets/img/technologies/ionic.png',
        active: false,
        disabled: false
    },
    {
        id: 'native_script',
        img: 'assets/img/technologies/native_script.png',
        active: false,
        disabled: false
    },
    {
        id: 'google',
        img: 'assets/img/technologies/google_cloud.png',
        active: false,
        disabled: false
    },
    {
        id: 'firebase',
        img: 'assets/img/technologies/firebase.png',
        active: false,
        disabled: false
    },
    {
        id: 'heroku',
        img: 'assets/img/technologies/heroku.png',
        active: false,
        disabled: false
    },
    {
        id: 'aws',
        img: 'assets/img/technologies/aws.png',
        active: false,
        disabled: false
    },
    {
        id: 'lang',
        img: 'assets/img/technologies/lang.png',
        active: false,
        disabled: false
    },
    {
        id: 'js',
        img: 'assets/img/technologies/java_script.png',
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
        title: 'We built ngx-bootstrap library',
        description: 'Bootstrap components powered by Angular',
        list: ['Flexibility', 'Tinker-friendly code', 'Thorough documentation', 'Lots of demo'],
        name: 'ngx-bootstrap',
        img: 'assets/img/bg-img/open-source/ngx-bootstrap.svg',
        link: 'https://valor-software.com/ngx-bootstrap/#/'
    },
    {
        title: 'We sponsor NestJS framework',
        description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications',
        list: ['Modular architecture', 'Scalability', 'Compatibility with server-side apps', 'Orientation on endpoints'],
        name: 'NestJS',
        img: 'assets/img/bg-img/open-source/nestjs.svg',
        link: 'https://nestjs.com/'
    },
    {
        title: 'We contribute to NativeScript',
        description: 'Empower JavaScript with native APIs. Liberate your development by using platform APIs directly without leaving your love for JavaScript aside.',
        list: ['Flexible', 'Regular updates', 'Compatible', 'Inspires animations'],
        name: 'NativeScript',
        img: 'assets/img/bg-img/open-source/nativescript.svg',
        link: 'https://nativescript.org/'
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
    verticalSwiperConfig: SwiperOptions = {
        direction: 'vertical',
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            clickable: true
        },
    };
    technologiesList: typeof technologiesList = technologiesList;
    projectList = projectsList;
    sortedProjects?: {labels: string[], name: string, img: string}[];
    sortedProjectsAmount = 4;
    showSocial = false;
    services: typeof ServicesModel = ServicesModel;
    openSourceSlides: typeof OpenSourceSlidesModel = OpenSourceSlidesModel;

    constructor() {
        this.sortedProjectsAmount = window.innerWidth >= 768 ? 4 : 2;
        this.initDisabledTechnologies();
        this.sortProjects('angular');
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
}
