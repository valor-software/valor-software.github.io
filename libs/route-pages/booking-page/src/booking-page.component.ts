import { Component } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { ITechnologiesCard } from '@valor-software/common-docs';
import { IBookingChallengeCard } from './booking-challenge-card/booking-challenge-card.component';

SwiperCore.use([Pagination]);

const challenges: IBookingChallengeCard[] = [
    {
        challenge: {
            title: 'Challenge 1',
            subtitle: 'Security measures',
            description: ['Our client cares a lot about users’ personal data safety and the security of their solutions. The Booking Platform is only available for the organization’s employees, that’s why we paid additional attention to the procedure of authentication and login.']
        },
        solution: {
            title: 'Solution:',
            description: [
                `User authentication and access management solutions ensured that only preliminary registered users with the organization's domains get access to the app.`,
                `We’ve also added the SSO functionality for a better user experience with the app. As our target audience is likely to be limited in time to make their bookings and order carriages, SSO simplifies access to the app and eliminates the need to remember usernames and passwords.`,
            ]
        },
        footer: {
            title: 'Impact',
            description: [
                'The app has security authentication that lets users to log in and use the app only after they pass the domain check',
                'Streamlined access to the application with SSO'
            ]
        }
    },
    {
        challenge: {
            title: 'Challenge 2',
            subtitle: 'Poor Internet connection',
            description: ['Most of our audiences access the Platform from low connectivity locations and high-latency connections. So we intended to create an app that allows users with bad or no connectivity to browse through pages and make bookings.']
        },
        solution: {
            title: 'Solution:',
            description: [
                'The app uses <a href="https://realm.io/" target="_blank"><u>Realm</u></a> as a local database which also supports caching to store data for offline mode. Once the connection is restored, the data is transferred to the server and the request is processed.',
                'For applying the app offline, a user selects the services he’s going to need, and all the data gets uploaded to the local DB and becomes available in a few minutes despite the connection loss.'
            ]
        },
        footer: {
            title: 'Impact',
            description: ['The application can be used offline and on conditions of intermittent Internet connection at full capacity!']
        },
        src: 'assets/img/bg-img/booking_page/diagram_2.png'
    },
    {
        challenge: {
            title: 'Challenge 3',
            subtitle: 'Low-end devices',
            description: ['We anticipated the fact that most of the users have low-end smartphones, so the app must be light. Despite this restriction, we still wanted to provide users with the experience they expect from a good service application, which is fast, friendly, and simple to navigate.']
        },
        solution: {
            title: 'Solution:',
            description: [
                `The first thing we did was adaptive testing to make sure the layout looks good on the users’ screens of all the most common sizes. <a href="https://analytics.google.com/analytics/web/provision/#/provision"><u>Google Analytics</u></a> helped us specify kinds of devices that are the most popular in our audience, and we crafted the app for them.`,
                `To cope with the problem of time-consuming data processing inside the app, which we couldn’t really avoid because of the app’s rich functionality, we played with animations. The engineer called for an animation whenever calculations took longer and became noticeable for a user.`
            ]
        },
        footer: {
            title: 'Impact',
            description: [
                `The Booking Platform app performs well regardless of users’ phones' processing capacity, as our audience tends to use older versions of smartphones`,
                `We kept a decent user experience and made heavy calculations go unnoticeably for users`
            ]
        }
    },
    {
        challenge: {
            title: 'Challenge 4',
            subtitle: 'Integration with the backend',
            description: ['The functionality of the mobile and the web app overlaps, and these platforms share particular endpoints on the backend. So, for example, changes in the API version for the web may affect the performance or even the entire functioning of the mobile app that reuses this API. And we faced the situation that even if the mobile team immediately upgrades the app with modernized endpoints, there’s no chance we can make all the app users upgrade to the latest version immediately.']
        },
        solution: {
            title: 'Solution:',
            description: [
                `We implemented versioning, so every dependency stays in its place and users who continue using older versions of the app experience no difficulties because they’re still supported.`,
                `Also, we incorporated the practice of early reporting about any “breakable changes” to the APIs that can affect the mobile app. This way, the mobile team can foresee and avoid possible breaks.`
            ]
        },
        footer: {
            title: 'Impact',
            description: [
                'Engineers of the web and backend team can make upgrades and push new features to production without interrupting the user experience of mobile app users. Versioning saves the day!'
            ]
        }
    },
];

const technologiesCards: ITechnologiesCard[] = [
    {
        title: 'Mobile',
        smJustify: 'center',
        lgJustify: 'start',
        technologies: [
            {
                src: "assets/img/technologies/others/react_clean.png",
                title: "React"
            },
            {
                src: "assets/img/technologies/others/realm.png",
                title: "Realm"
            },
            {
                src: "assets/img/technologies/others/azure.png",
                title: "Azure"
            }
        ]
    },

    {
        title: 'Web',
        smJustify: 'center',
        lgJustify: 'start',
        technologies: [
            {
                src: "assets/img/technologies/others/python.png",
                title: "Ruby"
            },
            {
                src: "assets/img/technologies/others/react_clean.png",
                title: "React",
            }
        ]
    }
];

const deliverablesCards: DeliverablesCards[][] = [

    [{
        title: '1. Rides',
        description: [
            "The application unites drivers, air carriers, accommodations, and medical services all in one place for the organization’s staff only.We implemented the transfer functionality to connect staff and volunteers with trusted drivers with over 4000 vehicles at their disposal.",
            "Here the module offers two sets of functionality:"
        ]
    },
    {
        title: 'For staff',
        isSubtitle: true,
        description: [
            'comfy and simple user journey to pic the destination, request a ride, meet the driver, estimate the trip, and do everything you need to accomplish the mission.',
            'Google Maps is one more third-party service used in this mobile app. It helps users to choose a pick-up/drop-off location.'
        ],
        img: 'assets/img/bg-img/booking_page/for_staff.png'
    },
    {
        title: 'For drivers',
        isSubtitle: true,
        description: [
            'to get a car, estimate its state, accept the ride, also use a ride-sharing option and pick up several users for similar routes, do their job fast and efficiently.'
        ],
        img: 'assets/img/bg-img/booking_page/for_drivers.png'
    }
    ],
    [
        {
            title: '2. Accommodation booking',
            description: [
                "This menu option allows users to create a booking in a hotel or a guesthouse in one out of more than a hundred locations across the world. A user picks the place, adds personal information and info connected with the travel, like a purpose, employment details, and flight tickets, and waits till the confirmation of booking. Once confirmed, users see all the details of their booking in the “My bookings” section."
            ],
            img: 'assets/img/bg-img/booking_page/accommodation.png'
        }
    ],
    [
        {
            title: '3. Booking of medical services',
            description: [
                "We’ve implemented complicated functionality that allows staff to get medical assistance in any place where their missions take place. Users get access to the database of clinics, book an appointment, pick a convenient date and time, leave remarks, and attach documents related to their medical condition. They also have an opportunity to book an online consultation and join from a mobile device using third-party services."
            ],
            img: 'assets/img/bg-img/booking_page/medical_services.png'
        }
    ],
    [
        {
            title: '4. “My bookings” features and capabilities',
            description: [
                `It’s a huge part of functionality where users can view and interact with their bookings, whether it’s a hotel, a transfer service booking, or a consultation with a doctor. Precisely they can:
               <ul class="list-disc list-inside">
                <li>view the history of bookings;</li>
                <li>check the status and cancel booking;</li>
                <li>view details: e.g. driver’s contact details;</li>
                <li>contact the driver or the hotel where the booking is made;</li>
                <li>rate services and leave feedback;</li>
                <li>create favorites’ lists and rebook destinations;</li>
                <li>save booking cards to use offline.</li>
                </ul>
                `
            ],
            img: 'assets/img/bg-img/booking_page/features_and_capabilities.png'
        }
    ]

];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'booking-page',
    templateUrl: './booking-page.component.html'
})
export class BookingPageComponent {
    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'booking',
            title: 'Booking'
        }
    ];

    challenges: IBookingChallengeCard[] = challenges;
    technologiesCards: ITechnologiesCard[] = technologiesCards;
    deliverablesCards: DeliverablesCards[][] = deliverablesCards;

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

type DeliverablesCards = {
    title: string;
    description: string[];
    isSubtitle?: boolean;
    img?: string;
};