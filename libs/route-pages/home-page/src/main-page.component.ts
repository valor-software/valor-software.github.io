import {Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NpmStatisticService } from "./getNpmStatistic.service";
import SwiperCore, { Pagination, Mousewheel, SwiperOptions } from "swiper";
import { forkJoin, Subscription } from "rxjs";
import { GetPortfolioService, IExpandableCard, IPortfolio } from "@valor-software/common-docs";
import { titleRefactoring } from "@valor-software/common-docs";
import { IBusinessesCard } from './businesses-card.component';
SwiperCore.use([Mousewheel, Pagination]);

const slideModel: IExpandableCard[] = [
    {
        title: '<span>To nurture</span> professional growth',
        list: [
            'Culture of self-development',
            'Time for skill-up as part of the schedule',
            'Internal and external knowledge-sharing',
            'Contribution to open-source'
        ],
        imgSource: 'assets/img/bg-img/landing_slide/slide_1.svg'
    },
    {
        title: '<span>To make</span> outsourcing <span>more</span> human',
        list: [
            'Increased communication',
            'Decreased bureaucracy',
            'Flat company structure',
            'We’re all partners, inside the company and with clients'
        ],
        imgSource: 'assets/img/bg-img/landing_slide/slide_2.svg'
    },
    {
        title: '<span>To</span> make <span>the most complex </span>ideas<span> live</span>',
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
        active: true,
        disabled: false
    },
    {
        id: 'react_native',
        img: 'assets/img/technologies/not_active/react_native.png',
        activeImg: 'assets/img/technologies/active/react_native.png',
        blockedImg: 'assets/img/technologies/blocked/react_native.png',
        active: true,
        disabled: false
    },
    {
        id: 'ruby',
        img: 'assets/img/technologies/not_active/ruby.png',
        activeImg: 'assets/img/technologies/active/ruby.png',
        blockedImg: 'assets/img/technologies/blocked/ruby.png',
        active: true,
        disabled: false
    },
    {
        id: 'vue',
        img: 'assets/img/technologies/not_active/vue.png',
        activeImg: 'assets/img/technologies/active/vue.png',
        blockedImg: 'assets/img/technologies/blocked/vue.png',
        active: true,
        disabled: false
    },
    {
        id: 'nest_js',
        img: 'assets/img/technologies/not_active/nest_js.png',
        activeImg: 'assets/img/technologies/active/nest_js.png',
        blockedImg: 'assets/img/technologies/blocked/nest_js.png',
        active: true,
        disabled: false
    },
    {
        id: 'python',
        img: 'assets/img/technologies/not_active/python.png',
        activeImg: 'assets/img/technologies/active/python.png',
        blockedImg: 'assets/img/technologies/blocked/python.png',
        active: true,
        disabled: false
    },
    {
        id: 'go',
        img: 'assets/img/technologies/not_active/go.png',
        activeImg: 'assets/img/technologies/active/go.png',
        blockedImg: 'assets/img/technologies/blocked/go.png',
        active: true,
        disabled: false
    },
    {
        id: 'ionic',
        img: 'assets/img/technologies/not_active/ionic.png',
        activeImg: 'assets/img/technologies/active/ionic.png',
        blockedImg: 'assets/img/technologies/blocked/ionic.png',
        active: true,
        disabled: false
    },
    {
        id: 'native_script',
        img: 'assets/img/technologies/not_active/native_script.png',
        activeImg: 'assets/img/technologies/active/native_script.png',
        blockedImg: 'assets/img/technologies/blocked/native_script.png',
        active: true,
        disabled: false
    },
    {
        id: 'google',
        img: 'assets/img/technologies/not_active/google_cloud.png',
        activeImg: 'assets/img/technologies/active/google_cloud.png',
        blockedImg: 'assets/img/technologies/blocked/google_cloud.png',
        active: true,
        disabled: false
    },
    {
        id: 'firebase',
        img: 'assets/img/technologies/not_active/firebase.png',
        activeImg: 'assets/img/technologies/active/firebase.png',
        blockedImg: 'assets/img/technologies/blocked/firebase.png',
        active: true,
        disabled: false
    },
    {
        id: 'heroku',
        img: 'assets/img/technologies/not_active/heroku.png',
        activeImg: 'assets/img/technologies/active/heroku.png',
        blockedImg: 'assets/img/technologies/blocked/heroku.png',
        active: true,
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
        title: 'Support & Maintenance',
        img: 'assets/img/bg-img/services_img/services_5.svg'
    },
    {
        title: 'Product Ownership & Project Mgmt.',
        img: 'assets/img/bg-img/services_img/services_6.svg'
    }
];

interface IOpenSourceSlide {
    title: string;
    description: string;
    list: string[];
    name: string;
    button?: string;
    img: string;
    link: string;
    npmLink?: string;
    downloads: number;
    reverse?: boolean;
}
const OpenSourceSlidesModel: IOpenSourceSlide[] = [
    {
        title: 'We built<br> ngx-bootstrap library',
        description: 'Bootstrap components powered by Angular',
        list: ['Flexibility', 'Tinker-friendly code', 'In-depth documentation', 'Lots of demo'],
        name: 'ngx-bootstrap',
        img: 'assets/img/bg-img/open-source/ngx_bootstrap_new.svg',
        link: 'https://valor-software.com/ngx-bootstrap/#/',
        npmLink: 'https://www.npmjs.com/package/ngx-bootstrap',
        downloads: 0
    },
    {
        title: 'We sponsor<br>NestJS framework',
        description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications',
        list: ['Modular architecture', 'Scalability', 'Compatibility with server-side apps', 'Ability to serve multiple endpoints'],
        name: 'NestJS',
        img: 'assets/img/bg-img/open-source/nestjs_new.svg',
        link: 'https://nestjs.com/',
        downloads: 0,
        reverse: true
    },
    {
        title: 'We contribute<br>to NativeScript',
        description: 'Empower JavaScript with native APIs. Liberate your development by using platform APIs directly without leaving your love for JavaScript aside.',
        list: ['Flexible', 'Regular updates', 'Compatible', 'Inspires animations'],
        name: 'NativeScript',
        img: 'assets/img/bg-img/open-source/nativescript_new.svg',
        link: 'https://nativescript.org/partners/',
        downloads: 0
    },
    {
        title: 'We love Module Federation',
        description: 'We contribute to and heavily use this ground breaking method of sharing code between and within applications.',
        list: ['Better scalability', 'Independently-manageable apps', 'Reuse of apps, functions, components, or contents', 'No more divergent styles and duplicated components throughout parallel teams'],
        name: 'Module Federation',
        button: 'See what we\'re doing',
        img: 'assets/img/bg-img/open-source/module_federation.svg',
        link: 'https://valor-software.com/articles/announcing-strategic-partnership-with-zack-jackson-the-module-federation-inventor',
        downloads: 0,
        reverse: true
    }
];

const businessList: IBusinessesCard[] = [
    {
        title: "Startups",
        description: ["We’ll transform your idea into a brand and a product that will have its market niche, killing features, and loyal audience."],
        buttonTitle: "Visit page",
        route: "clients/startups",
        imgSource: "assets/img/bg-img/businesses_img/startup.png"
    },
    {
        title: "Enterprises",
        description: ["Helping you switch from legacy systems, we’ll choose the optimal technology that will serve your business needs now and in the future."],
        buttonTitle: "Learn more",
        route: "clients/enterprises",
        imgSource: "assets/img/bg-img/businesses_img/enterprise.png"
    },
    {
        title: "Small to medium",
        description: ["We make progress transparent and predictable, so you can forecast the result after every development stage and plan your budget for the next business turn."],
        buttonTitle: "View details",
        route: "clients/smbs",
        imgSource: "assets/img/bg-img/businesses_img/small_to_medium.png"
    },
    {
        title: "Non-profits",
        description: ["When strict timing and budget are as critical as the product quality, we’ll deliver the required scope within the given timeframe and make sure to address changes instantly."],
        buttonTitle: "Explore now",
        route: "clients/non-profit",
        imgSource: "assets/img/bg-img/businesses_img/non_profits.png"
    },
];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnDestroy {
    cards = slideModel;

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

    businessList: IBusinessesCard[] = businessList;
    technologiesList: typeof technologiesList = technologiesList;
    sortedProjectsAmount = 4;
    showSocial = false;
    services: typeof ServicesModel = ServicesModel;
    openSourceSlides: IOpenSourceSlide[] = OpenSourceSlidesModel;
    $portfolio: Subscription;
    projects?: IPortfolio[];
    sortProjects?: IPortfolio[];

    constructor(
        private npmCounts: NpmStatisticService,
        private cdr: ChangeDetectorRef,
        protected router: Router,
        private getPortfolio: GetPortfolioService,
    ) {
        this.addScriptsToHead();
        
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
  
    ngOnDestroy(): void {
        this.removeOldMicroDAta();
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
        this.technologiesList.map(item => {
            item.active = !item.disabled && item.id === id;
        });
        return this.technologiesList.some(item => item.active);
    }

    getSortProjects(id: string) {
        if (this.setActiveTechnology(id)) {
            this.sortProjects = this.projects?.filter(item => item.sortTechnologies?.includes(id))?.slice(0, this.sortedProjectsAmount);
        }
    }

    projectRoute(name: string): string {
        return titleRefactoring(name);
    }

    checkIndex(index: number): boolean {
        index++;
        return !!(index && !(index % 4));
    }

    checkFirstSectionHeight(): boolean {
        if (window.innerWidth < 768) {
            return true;
        }

        return window.innerHeight > 800 && window.devicePixelRatio * 100 === 100;
    }

    
    addScriptsToHead() {
        this.removeOldMicroDAta();

        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.setAttribute('id', 'home-micro-data');
        script.setAttribute('type', 'application/ld+json');
        script.innerHTML = `
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Valor Software",
            "url": "https://valor-software.com/",
            "logo": "https://valor-software.com/assets/img/valor_img/valor-logo.svg",
            "sameAs": [
              "https://valor-software.com/",
              "https://github.com/valor-software",
              "https://twitter.com/ValorSoft",
              "https://www.linkedin.com/company/valor-software/about/",
              "https://www.facebook.com/valorsoftware/"
            ]
          }
        `;

        head.insertBefore(script, head.firstChild);
    }

    removeOldMicroDAta() {
        const oldMicroDAta = document.getElementById('home-micro-data');
        if (oldMicroDAta) {
            oldMicroDAta.remove();
        }
    }
}
