import { Component } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { IChallengeCard } from './challenge-card.component';
SwiperCore.use([Pagination]);

const initialChallenges: IChallengeCard[] = [
    {
        challenge: {
            title: 'Challenge 1',
            description: 'To ensure Terminus users get accurate reports on their ad campaigns, we had to find a way to structure and process massive amounts of data coming from different sources to the data lake.'
        },
        solution: {
            title: 'Solution:',
            description: 'To solve the problem of poorly-structured data, we’ve added a new complicated functionality for deriving data in the needed format. We used the Amazon Athena to query data from the data lake and analyze it. Since Amazon Athena still gives out data in a “raw” format, we added a PostgreSQL database to the reporting pipeline using Ruby for the reports’ backend logic. This backend solution helps organize data, structure it, and bring it to the format suitable for reports. What’s more, it gives an opportunity for caching.'
        },
        footer: {
            title: 'Impact',
            description: 'With the implementation of new functionality and a new reporting flow, Terminus can serve their clients even better with their advanced data processing algorithms and provide more accurate and well-structured reports.'
        },
        src: 'assets/img/bg-img/terminus_page/challenge_1.svg'
    },
    {
        challenge: {
            title: 'Challenge 2',
            description: 'Since Terminus users reach out to hundreds and sometimes even thousands of companies, they need extended filtering options to process reports, compare the efficiency of different campaigns, and pick the best approach for the next run. Also, the client wanted to empower marketing teams with more options for targeting their campaigns and provide an intuitive admin interface to save time for setup.'
        },
        solution: {
            title: 'Solution:',
            description: 'We’ve implemented new functionality on the backend so Terminus users have a wider choice of approaches for running digital ads and can measure campaigns’ performance. Getting more precise analytics on how the target audience reacts to the received offers, marketing teams can tailor their approach. Also, we redesigned API endpoints for the creation of ad campaigns using GO, tackled issues with microservice architecture, and tuned the performance of the module.'
        },
        imgCarrousel: ['assets/img/bg-img/terminus_page/challenge_2.svg', 'assets/img/bg-img/terminus_page/challenge_2.svg', 'assets/img/bg-img/terminus_page/challenge_2.svg']
    }
];

const challengeSubSection: IChallengeCard = {
    challenge: {
        title: 'Challenge',
        description: 'Initially, Data and Measurement Studio were one single application with a shared codebase in AngularJS. This code had many lines and dependencies that could affect the stability and viability of the solution in the future. Also, we wanted to ensure that Data and Measurement Studio can scale as the number of users grow, and there always be engineers who can understand the code and manage it painlessly. For this and other reasons we migrated the application to a modern engine.'
    },
    solution: {
        title: 'Solution:',
        description: 'We’ve separated Data Studio and Measurement Studio into two applications and migrated the code from Angular.js to Angular. Also, to make Angular codebase even lighter and simplify app management, our team’s initiative was to implement Nx. It makes an application a set of libraries that can serve different modules of the system with no extra code required.'
    },
    footer: {
        title: 'Impact',
        list: ["Better code readability, clarity, and maintainability thanks to modular architecture",
            "Improved application performance",
            "Improved code linting, testing, and scaling with Nx",
            " Lighter codebase with clear structure and reusable components",
            "Simplified process of development and more accessible testing with the Angular CLI",
            "90% Unit test coverage!!"]
    },
    src: 'assets/img/bg-img/terminus_page/challenge_1.svg',
    subSection: {
        description: 'To make Angular codebase even lighter and simplify app management, our team’s initiative was to implement Nx. It makes an application a set of libraries that can serve different modules of the system with no extra code required. Also, we boosted the app performance.',
        imgs: [{ src: 'assets/img/bg-img/terminus_page/before_solution.svg', title: 'Before' }, { src: 'assets/img/bg-img/terminus_page/after_solution.svg', title: 'After' }]
    }
};

const overviewImages: string[] = [
    "assets/img/bg-img/terminus_page/overview.svg",
    "assets/img/bg-img/terminus_page/overview.svg",
    "assets/img/bg-img/terminus_page/overview.svg",
];

const reportImages: string[] = [
    "assets/img/bg-img/terminus_page/report.svg",
    "assets/img/bg-img/terminus_page/report.svg",
    "assets/img/bg-img/terminus_page/report.svg",
];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'terminus-page',
    templateUrl: './terminus-page.component.html'
})
export class TerminusPageComponent {
    initialChallenges: IChallengeCard[] = initialChallenges;
    challengeSubSection: IChallengeCard = challengeSubSection;
    overviewImages: string[] = overviewImages;
    reportImages: string[] = reportImages;
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