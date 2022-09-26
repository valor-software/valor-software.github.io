import { Component } from '@angular/core';
import { IChallengeCard } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from "swiper";
import { ITechnologiesCard } from './technologies-card.component';

SwiperCore.use([Pagination, Autoplay]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'liberty-flights-page',
    templateUrl: './liberty-flights-page.component.html'
})
export class LibertyFlightsPageComponent {
    
    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'liberty-flights',
            title: 'Liberty Flights'
        }
    ];

    seoStyleImages: string[] = [
        "assets/img/bg-img/liberty_flights_page/seo_friendly/1.png",
        "assets/img/bg-img/liberty_flights_page/seo_friendly/2.png",
        "assets/img/bg-img/liberty_flights_page/seo_friendly/3.png"
    ];

    mobileImages: string[] = [
        "assets/img/bg-img/liberty_flights_page/seo_friendly/4.png",
        "assets/img/bg-img/liberty_flights_page/seo_friendly/5.png",
    ];

    seoOptimizationList = [
        'On-page audit',
        'Optimizing conversions using Hotjar and Google Analytics tools',
        'Keyword research',
        'Crowd marketing campaign creation',
        'PBN link-building campaign creation',
        'Disavowed lots of toxic backlinks',
        'Resolved critical indexation issues'
    ];

    seoOptimizationImpactList = [
        ['Improved conversion rates'],
        ['Keywords, titles, meta desc optimized'],
        ['Fixed indexation and eliminated toxic backlinks']
    ];

    balancerToGCPImpactList = [
        ['The cost for servers usage decreased from around 100$ a month to 10$'],
        ['Stable website performance through peak loads']
    ];

    deliveredFeaturesImpactList = [
        ['Eased checkout for customers, minimized abandoned carts, and maximized conversions with new payment methods'],
        ['Higher customers engagement and sales rates with a Multibuy option and special wholesale deals'],
        ['Increased marketing reach, optimized sales cycle, and more loyal customers with a Referral program']
    ];

    deliveredFeatureList = [
        { title: 'Added GBG ID Scan', description: 'this service identifies passport or ID data and verifies user age before enabling the purchase.' },
        { title: 'Multi-buy', description: 'Enabled the Multi-buy option that supports different prices for goods depending on their amount in the shopping cart.' },
        { title: 'Advanced Order Flow', description: 'Advanced order flow which now supports retail and wholesale deals with a separate validation for wholesale orders – customers can buy more than available in stock.' },
        { title: 'Push Notifications', description: 'Also added Push notifications to share the latest news and arrivals on Liberty Flights with pop-ups.' },
        { title: 'Referral Program', description: 'Presented the Referral program for retail customers with the ability to send the referral link with a promo code for a discount to a friend or share the link on social networks.' },
        { title: 'New Payment Systems', description: 'Finally, we integrated two payment systems: Axxess Payments and HSBC. The latter is the second-largest bank in Europe, and in the future, this integration will enable quick payments for the products through almost all UK banks.' },
    ];

    migrationChallenge: IChallengeCard = {
        challenge: {
            title: 'The Challenge',
            description: [
                `We dealt with a codebase written differently from the Valor's standards, which made the migration more complicated. 
                 Another obstacle we faced was that the frontend part aimed to work inside the browser, which is typical for Angular. This influenced the work accuracy and negatively affected SEO. Since the web page content varied based on the results of work in the browser instead of coming directly from the server, we couldn’t display the requested info in the search results.
                Due to updates in Angular 10, a whole lot of issues arose during the deployment process. But the worst part was the necessity to turn off the production site during the deployment for maintenance. Sometimes it led to nearly an hour of downtime, which was unacceptable.`
            ]
        },
        solution: {
            title: 'Solution:',
            description: ['Adding Angular Universal for server-side rendering (SSR) helped us solve the SEO challenge as the pages started loading fully and displayed correct search engine results. Later, once it became available, we switched to Scully instead of SSR. Scully allowed us to completely rework the build and deployment processes and eliminated the need to use the maintenance page before deploying to the app (especially when it comes to the deployment of features on the frontend).']
        },
        footer: {
            title: 'Impact',
            list: [
                'Improved SEO in Angular using Scully',
                'Streamlined build process and decreased deployment time',
                'Eliminated an hour-long downtime of the production website'
            ]
        },
    };

    technologiesCards: ITechnologiesCard[] = [
        {
            title: 'Frontend',
            smJustify: 'between',
            lgJustify: 'between',
            technologies: [
                {
                    src: "assets/img/technologies/active/angular.png",
                    title: "Angular 12"
                },
                {
                    src: "assets/img/technologies/active/ngrx.png",
                    title: "NgRx"
                },
                {
                    src: "assets/img/technologies/others/scully.png",
                    title: "Scully"
                }
            ]
        },

        {
            title: 'Backend',
            smJustify: 'between',
            lgJustify: 'between',
            technologies: [
                {
                    src: "assets/img/technologies/others/node_js.png",
                    title: "Node.js"
                },
                {
                    src: "assets/img/technologies/active/nest_js.png",
                    title: "Nest.js",
                    wrapText: true
                },

                {
                    src: "assets/img/technologies/others/type_script.png",
                    title: "Typescript"
                }
            ]
        }
    ];

    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 0,
        slideToClickedSlide: true,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3000,
        }
    };

    seoImpactList = [
        ['At least 20% lower bounce rates thanks to the upgraded UI', 'and the availability of the mobile version of the website'],
        ['The page view rates increased by 40%'],
        ['Improved SEO metrics thanks to the SEO-friendly website design']
    ];

}