import { Component } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { ITechnologiesCard } from '@valor-software/common-docs';

SwiperCore.use([Pagination]);

const technologiesCards: ITechnologiesCard[] = [
    {
        title: '',
        smJustify: 'center',
        lgJustify: 'start',
        technologies: [
            {
                src: "assets/img/technologies/svg/react_clean.svg",
                title: "React"
            },
            {
                src: "assets/img/technologies/active/node.png",
                title: "Node.Js"
            },
            {
                src: "assets/img/technologies/others/type_script.png",
                title: "TypeScript"
            },
            {
                src: "assets/img/technologies/others/stripe.png",
                title: "Stripe"
            },
            {
                src: "assets/img/technologies/others/sentry.png",
                title: "Sentry"
            },
            {
                src: "assets/img/technologies/active/g_analytics.png",
                title: "Google Analytics"
            },
            {
                src: "assets/img/technologies/others/auth0.png",
                title: "Auth0"
            },
            {
                src: "assets/img/technologies/others/cloudflare_workers.png",
                title: "Cloudflare Workers"
            }
        ]
    },

];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'zephyr-page',
    templateUrl: './zephyr-page.component.html'
})
export class ZephyrPageComponent {
    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'zephyr',
            title: 'zephyr'
        }
    ];

    technologiesCards: ITechnologiesCard[] = technologiesCards;
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
