import { Component } from '@angular/core';
import { DeliverableCard, ITechnologiesCard } from '@valor-software/common-docs';
import { IFeaturesCard } from './features-card.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'coral-page',
    templateUrl: './coral-page.component.html'
})

export class CoralPageComponent {

    drawbacks: string[] = [
        'Tricky code',
        'Lack of functionality and code docs',
        'Admin panel, web, and mobile parts needed help'
    ];

    drawbacksSolution: string[] = [
        'The chat prompts were a big hit with users because they provided helpful suggestions. We also added analytics to provide even deeper assistance. These suggestions covered a wide range of topics, not just sex. At one point, we had 30,000 partners and the system crashed because we tried to send all the messages at once.',
        'To fix this issue, we had to look at caching. Caches can be different, almost unchangeable, changeable, and 100% static. So we used caching mostly instead of the server and protected the distances (PD(t)) of each thread. This greatly reduced the time it took to send messages from two hours to just 10 minutes. Max was the one who came up with the new logic and flow that made this possible.',
        'In the end, it was all worth it because our users were thrilled with the improvements. As they say, "Good things come to those who wait... and have a good cache system in place!" And, as always, huge thanks to Max for being a coding wizard and making it all happen.'
    ];

    technologiesCard: ITechnologiesCard[] = [
        {
            smJustify: 'evenly',
            lgJustify: 'start',
            technologies: [
                {
                    src: "assets/img/technologies/others/react_clean.png",
                    title: "React Native"
                },
                {
                    src: "assets/img/technologies/active/nest_js.png",
                    title: "Nest.js"
                },
                {
                    src: "assets/img/technologies/others/graph_ql.png",
                    title: "GraphQL"
                }
            ]
        }
    ];

    changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
        {
            path: 'projects',
            title: 'Portfolio',
        },
        {
            path: 'coral',
            title: 'coral'
        }
    ];

    deliverable: { title: string, descriptions: string[], roles: string[] } =
        {
            title: "Coral V 2. A new reconsidered and blossoming cross-platform mobile app.",
            descriptions: [
                `We used Nest.js and GraphQL to create a new server that acts as an intermediary between the frontend and the existing server. We kept the old server for two reasons: the admin panel was tightly connected to it, and it was also used for the web part. Later on, we gave the admin panel independence from this "construction" but still kept the old server for the web. This made sense because we needed to prioritize value for our users and provide them with the features they needed, just as the client has been doing it since Coral was created.`,
                `Max and Denis started from scratch on this project. They were the ones doing the heavy lifting, while Valor provided some tech solutions and suggestions, the client's team made the final call.`
            ],
            roles:
                [
                    'Backend - Maxim Ugnichenko',
                    'Frontend - Alexander Bolshakov',
                    'Design - mostly Coral Team, then - Alexandra Nadtochiy',
                ]
        };

    features: IFeaturesCard[] = [
        {
            title: 'Join our forum and get social!',
            description: `In addition to our app that analyzes your answers and gives advice, we've also created a blog and social platform where people can share, support, and help each other through discussions.`,
            img: 'assets/img/bg-img/coral_page/onboarding_1.png',
        },
        {
            title: 'Chat',
            description: `We've also added a chat feature for partners, complete with photos and audio messages (scripting coming soon)."`,
            img: 'assets/img/bg-img/coral_page/onboarding_2.png',
        },
        {
            title: 'Gifts – merch!',
            description: `We also offer gifts and badges to users who have completed certain achievements or shown bravery in sharing their experiences on the forum.`
        },
        {
            title: 'Survey',
            description: `Once a month, we ask users what they like and what they would like to see improved. This is how we came up with chat prompts. We also have plans to add gamification features like badges, but we need to secure the necessary budget first.`
        },
        {
            title: 'Analytics',
            description: `A designated person reviews all forum comments using a Slack integration, so the Coral team knows which users are happy and which ones are not. A lot of analytics goes into the app to the extent that the frontend is 75% analytics.`
        }
    ];


}