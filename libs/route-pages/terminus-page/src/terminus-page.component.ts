import { Component } from '@angular/core';
import { IChallengeCard } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { ITechnologiesCard } from '@valor-software/common-docs';

SwiperCore.use([Pagination]);

const initialChallenges: IChallengeCard[] = [
    {
        challenge: {
            title: 'Challenge 1',
            description: ['To ensure Terminus users get accurate reports on their ad campaigns, we had to find a way to structure and process massive amounts of data coming from different sources to the data lake.']
        },
        solution: {
            title: 'Solution:',
            description: ['To solve the problem of poorly-structured data, we’ve added a new complicated functionality for deriving data in the needed format. We used the Amazon Athena to query data from the data lake and analyze it. Since Amazon Athena still gives out data in a “raw” format, we added a PostgreSQL database to the reporting pipeline using Ruby for the reports’ backend logic. This backend solution helps organize data, structure it, and bring it to the format suitable for reports. What’s more, it gives an opportunity for caching.']
        },
        footer: {
            title: 'Impact',
            description: ['With the implementation of new functionality and a new reporting flow, Terminus can serve their clients even better with their advanced data processing algorithms and provide more accurate and well-structured reports.']
        },
        src: 'assets/img/bg-img/terminus_page/challenge_1.svg'
    },
    {
        challenge: {
            title: 'Challenge 2',
            description: ['Since Terminus users reach out to hundreds and sometimes even thousands of companies, they need extended filtering options to process reports, compare the efficiency of different campaigns, and pick the best approach for the next run. Also, the client wanted to empower marketing teams with more options for targeting their campaigns and provide an intuitive admin interface to save time for setup.']
        },
        solution: {
            title: 'Solution:',
            description: ['We’ve implemented new functionality on the backend so Terminus users have a wider choice of approaches for running digital ads and can measure campaigns’ performance. Getting more precise analytics on how the target audience reacts to the received offers, marketing teams can tailor their approach.', 'Also, we redesigned API endpoints for the creation of ad campaigns using GO, tackled issues with microservice architecture, and tuned the performance of the module.']
        },
        imgCarrousel: [
            'assets/img/bg-img/terminus_page/create_campaign/create_campaign_1.png',
            'assets/img/bg-img/terminus_page/create_campaign/create_campaign_2.png',
            'assets/img/bg-img/terminus_page/create_campaign/create_campaign_3.png',
            'assets/img/bg-img/terminus_page/create_campaign/create_campaign_4.png',
            'assets/img/bg-img/terminus_page/create_campaign/create_campaign_5.png',
            'assets/img/bg-img/terminus_page/create_campaign/create_campaign_6.png'
        ]
    }
];

const dataAndMeasurementChallenge: IChallengeCard = {
    challenge: {
        title: 'Challenge',
        description: ['Initially, Data and Measurement Studio were one single application with a shared codebase in AngularJS. This code had many lines and dependencies that could affect the stability and viability of the solution in the future. Also, we wanted to ensure that Data and Measurement Studio can scale as the number of users grow, and there always be engineers who can understand the code and manage it painlessly. For this and other reasons we migrated the application to a modern engine.']
    },
    solution: {
        title: 'Solution:',
        description: ['We’ve separated Data Studio and Measurement Studio into two applications and migrated the code from Angular.js to Angular. Also, to make Angular codebase even lighter and simplify app management, our team’s initiative was to implement Nx. It makes an application a set of libraries that can serve different modules of the system with no extra code required.']
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
    comparisonImg: {
        before: { src: 'assets/img/bg-img/terminus_page/campaign_trends_before.png', title: 'Before' },
        after: { src: 'assets/img/bg-img/terminus_page/campaign_trends_after.png', title: 'After' }
    },
    subSection: {
        description: ['To make Angular codebase even lighter and simplify app management, our team’s initiative was to implement Nx. It makes an application a set of libraries that can serve different modules of the system with no extra code required. Also, we boosted the app performance.'],
        imgs: [{ src: 'assets/img/bg-img/terminus_page/highlighted_before.png', title: 'Before' }, { src: 'assets/img/bg-img/terminus_page/highlighted_after.png', title: 'After' }]
    }
};

const cloudChallenge: IChallengeCard = {
    challenge: {
        title: 'Challenge',
        description: ['As Email Experiences grows, it needs a more modern compute power to ensure high performance and stability. Also, it becomes harder for the team to monitor the state of numerous services. Our goal here was to find a more suitable solution instead of Amazon Elastic Compute Cloud (EC2) and KOPS (Kubernetes Operations System) which took too much time to restart a container or handle a request.']
    },
    solution: {
        title: 'Solution:',
        description: ['We migrated the application from EC2 and KOPS to Amazon Elastic Kubernetes Service (Amazon EKS) and streamlined the deployment, scaling, and management of the clusters within the module.']
    },
    footer: {
        title: 'Impact',
        list: ['Reduced costs for configuration management',
            'Hassle-free management of Kubernetes control plane',
            'Simplified cluster maintenance, additional security and support for the cluster from AWS',
            'Improved performance and stability']
    },
    src: 'assets/img/bg-img/terminus_page/cloud_challenge.svg',
    smallImg: true
};

const newFunctionalitiesChallenge: IChallengeCard = {
    challenge: {
        title: 'Challenge',
        description: ['Terminus wanted to offer users a sophisticated experience with the chat and a handy admin page, so first the Valor team had particular flaws to address, and then boost the admin dashboard and chat with new significant functionality.']
    },
    solution: {
        title: 'Solution:',
        description: ['Making bug fixing alongside the implementation of new features, we polished the UI part of the admin page and extended the chat capabilities.']
    },
    footer: {
        title: 'Impact',
        list: ["Advanced customization that implies AI-powered bots",
            "Unique playbooks to serve requests of different audiences",
            "Modernized admin panel with improved UI"]
    },
    src: 'assets/img/bg-img/terminus_page/newTechnologies_challenge.svg',
    subSection: {
        description: ['Now Chat Experiences offers even more options for customization to users: the opportunity to create bots powered by artificial intelligence and unique playbooks for different audiences.'],
        video: "https://embed-fastly.wistia.com/deliveries/32ab3ecde4d919f46485278952e0a36a8cef0790/file.mp4",
        video_poster:'assets/img/bg-img/terminus_page/video_poster.png'
    }
};

const technologiesCards: ITechnologiesCard[] = [
    {
        title: 'Frontend',
        smJustify: 'center',
        lgJustify: 'between',
        technologies: [
            {
                src: "assets/img/technologies/active/angular11.png",
                title: "Angular 11"
            },
            {
                src: "assets/img/technologies/active/ngrx.png",
                title: "NgRx"
            },
            {
                src: "assets/img/technologies/active/amcharts.png",
                title: "amCharts"
            },
            {
                src: "assets/img/technologies/active/jest.png",
                title: "Jest"
            },
            {
                src: "assets/img/technologies/active/cypress.png",
                title: "Cypress"
            }
        ]
    },

    {
        title: 'Backend',
        smJustify: 'center',
        lgJustify: 'between',
        technologies: [
            {
                src: "assets/img/technologies/active/ruby.png",
                title: "Ruby"
            },
            {
                src: "assets/img/technologies/active/aws.png",
                title: "Amazon Athena",
                wrapText: true
            },

            {
                src: "assets/img/technologies/active/postgresql.png",
                title: " PostgreSQL"
            },
            {
                src: "assets/img/technologies/active/rspec.png",
                title: "RSpec"
            },
            {
                src: "assets/img/technologies/active/go.png",
                title: "Go"
            }
        ]
    }
];

const cloudTechnologies: ITechnologiesCard[] = [
    {
        smJustify: 'center',
        lgJustify: 'start',
        technologies: [
            {
                src: "assets/img/technologies/active/ruby.png",
                title: "Ruby"
            },
            {
                src: "assets/img/technologies/active/elixir.png",
                title: "Elixir"
            },
            {
                src: "assets/img/technologies/active/node.png",
                title: "NodeJs"
            },
        ]
    }
];

const migrationTechnologies: ITechnologiesCard[] = [
    {
        smJustify: 'center',
        lgJustify: 'start',
        technologies: [
            {
                src: "assets/img/technologies/active/angularjs.png",
                title: "AngularJs"
            },
            {
                src: "assets/img/technologies/active/angular11.png",
                title: "Angular 11"
            },
            {
                src: "assets/img/technologies/active/nx.png",
                title: "Nx"
            },
        ]
    }
];

const newFunctionalitiesTechnologies: ITechnologiesCard[] = [
    {
        title: 'Frontend',
        technologies: [
            {
                src: "assets/img/technologies/active/react.png",
                title: "React.js"
            }
        ],
        smJustify: 'between',
        lgJustify: 'between'
    },

    {
        title: 'Backend',
        technologies: [
            {
                src: "assets/img/technologies/active/node.png",
                title: "Node.js"
            }
        ],
        smJustify: 'between',
        lgJustify: 'between'
    }
];
const overviewImages: string[] = [
    "assets/img/bg-img/terminus_page/campaign_overview/campaign_overview_1.png",
    "assets/img/bg-img/terminus_page/campaign_overview/campaign_overview_2.png"
];

const reportImages: string[] = [
    "assets/img/bg-img/terminus_page/report/report_1.png",
    "assets/img/bg-img/terminus_page/report/report_2.png",
    "assets/img/bg-img/terminus_page/report/report_3.png",
];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'terminus-page',
    templateUrl: './terminus-page.component.html'
})
export class TerminusPageComponent {
    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'terminus',
            title: 'Terminus'
        }
    ];

    initialChallenges: IChallengeCard[] = initialChallenges;
    dataAndMeasurementChallenge: IChallengeCard = dataAndMeasurementChallenge;
    cloudChallenge: IChallengeCard = cloudChallenge;
    newFunctionalitiesChallenge: IChallengeCard = newFunctionalitiesChallenge;

    technologiesCards: ITechnologiesCard[] = technologiesCards;
    newFunctionalitiesTechnologies: ITechnologiesCard[] = newFunctionalitiesTechnologies;
    cloudTechnologies: ITechnologiesCard[] = cloudTechnologies;
    migrationTechnologies: ITechnologiesCard[] = migrationTechnologies;

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