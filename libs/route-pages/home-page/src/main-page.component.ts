import {Component, ViewChild, ChangeDetectorRef, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { NpmStatisticService } from "./getNpmStatistic.service";
import SwiperCore, { Pagination, Mousewheel, SwiperOptions  } from "swiper";
import {forkJoin, Subscription} from "rxjs";
import {GetPortfolioService, IPortfolio, ProjectsRouteService} from "@valor-software/portfolio";
import {titleRefactoring} from "@valor-software/common-docs";
SwiperCore.use([Mousewheel, Pagination]);

const slideModel = [
    {
        title: '<span>To nurture</span> professional<br>growth',
        list: [
            'Culture of self-development',
            'Time for skill-up and self-study',
            'Cultivation of knowledge-sharing',
            'Contribution to open source'
        ],
        imgSource: 'assets/img/bg-img/landing_slide/slide_1.svg'
    },
    {
        title: '<span>To make</span> outsourcing<br><span>more</span> human',
        list: [
            'Improved communication',
            'Decreased bureaucracy',
            'Human-centred organization',
            'We’re all partners, inside the company and with clients'
        ],
        imgSource: 'assets/img/bg-img/landing_slide/slide_2.svg'
    },
    {
        title: '<span>To</span> make <span>the most<br> complex </span>ideas<span> live</span>',
        list: [
            'Pushing technology to its limits',
            'Building unique expertise within the company',
            'Mastering cutting-edge tools',
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
        title: 'We’ve built<br> ngx-bootstrap<br> library',
        description: 'Bootstrap components powered by Angular',
        list: ['Flexibility', 'Tinker-friendly code', 'In-depth documentation', 'Lots of demo'],
        name: 'ngx-bootstrap',
        img: 'assets/img/bg-img/open-source/ngx-bootstrap.svg',
        link: 'https://valor-software.com/ngx-bootstrap/#/',
        npmLink: 'https://www.npmjs.com/package/ngx-bootstrap',
        downloads: 0
    },
    {
        title: 'We sponsor<br>NestJS<br> framework',
        description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications',
        list: ['Modular architecture', 'Scalability', 'Compatibility with server-side apps', 'Ability to serve multiple endpoints'],
        name: 'NestJS',
        img: 'assets/img/bg-img/open-source/nestjs.svg',
        link: 'https://nestjs.com/',
        downloads: 0
    },
    {
        title: 'We contribute<br>to NativeScript',
        description: 'NativeScript empowers you to access native platform APIs from JavaScript directly',
        list: ['Flexible', 'Regular updates', 'Compatible', 'Inspires animations'],
        name: 'NativeScript',
        img: 'assets/img/bg-img/open-source/nativescript.svg',
        link: 'https://nativescript.org/partners/',
        downloads: 0
    }
];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    slides: typeof slideModel = slideModel;
    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        mousewheel: {
            releaseOnEdges: true
        },
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
        mousewheel: {
            releaseOnEdges: true
        },
        pagination: {
            clickable: true
        },
    };

    technologiesList: typeof technologiesList = technologiesList;
    sortedProjectsAmount = 4;
    showSocial = false;
    services: typeof ServicesModel = ServicesModel;
    openSourceSlides: typeof OpenSourceSlidesModel = OpenSourceSlidesModel;
    $portfolio: Subscription;
    projects?: IPortfolio[];
    sortProjects?: IPortfolio[];

    constructor(
        private npmCounts: NpmStatisticService,
        private cdr: ChangeDetectorRef,
        protected router: Router,
        private getPortfolio: GetPortfolioService,
        private projectRouteServ: ProjectsRouteService
    ) {
        this.$portfolio = forkJoin(this.getPortfolio.getFullListOfPortfolio()).subscribe((res: IPortfolio[] | undefined) => {
            this.projects = res;
            this.sortProjects = res;
            this.initDisabledTechnologies();
            this.getSortProjects('angular');
        });



        this.sortedProjectsAmount = window.innerWidth >= 768 ? 4 : 2;
        if (this.router.parseUrl(this.router.url).fragment) {
            this.router.navigate(['.']);
        }
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
            const res = this.projects?.find(item => item.sortTechnologies?.includes(techno.id));
            if (!res) {
                techno.disabled = true;
            }
        });
    }

    setActiveTechnology(id: string): boolean {
        this.technologiesList.map( item => {
            item.active = !item.disabled && item.id === id;
        });
        return this.technologiesList.some(item => item.active);
    }

    getSortProjects(id: string) {
        if (this.setActiveTechnology(id)) {
            this.sortProjects = this.projects?.filter(item => item.sortTechnologies?.includes(id))?.slice(0, this.sortedProjectsAmount);
        }
    }

    projectRoute(name: string) {
        this.router.navigate(['projects', titleRefactoring(name)]);
    }

    checkIndex(index: number): boolean {
        index++;
        return !!(index && !(index % 4));
    }

    checkFirstSectionHeight(): boolean {
        if (window.innerWidth < 768) {
            return true;
        }

        return window.innerHeight > 800 && window.devicePixelRatio*100 === 100;
    }
}
