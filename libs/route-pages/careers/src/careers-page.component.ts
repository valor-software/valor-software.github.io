import { Component } from '@angular/core';

const ourValues = [
    {
        title: 'Quality',
        description: 'We’re pushing the limits in terms of the reliability of the software we create.'
    },
    {
        title: 'Accountability',
        description: 'We support our performance with actual results and achieved goals.'
    },
    {
        title: 'Transparency',
        description: 'We encourage openness, honesty, and communication.'
    },
    {
        title: 'Teamwork',
        description: 'We can succeed best by helping others to succeed.'
    },
    {
        title: 'Stability',
        description: 'We take ownership of our actions and make progress a predictable indicator.'
    },
    {
        title: 'Growth',
        description: 'We flourish through training, knowledge-sharing, and contribution to open source.'
    },
    {
        title: 'Friendliness',
        description: 'We nurture the atmosphere of support and friendliness at Valor Software and beyond.'
    }
];

const offers = [
    {
        title: 'Flat Structure',
        description: 'Everyone can turn to everyone in the company, minimum bureaucracy, interdependencies, and formalities, communication is the key.',
        img: 'assets/img/bg-img/careers/offer/flat_str.svg'
    },
    {
        title: 'Remote',
        description: 'Even though we have a 4-flour office after renovation, everyone can work remotely, constantly, or from time to time.',
        img: 'assets/img/bg-img/careers/offer/remote.svg'
    },
    {
        title: 'Healthcare',
        description: 'You’ll have healthcare insurance that covers all the crucial health-related services, including vitamins for rainy seasons :)',
        img: 'assets/img/bg-img/careers/offer/healthcare.svg'
    },
    {
        title: 'Sports',
        description: 'We encourage you to stay fit, active, and full of energy, so we’ll compensate 50% for your gym, yoga, or other related subscriptions.',
        img: 'assets/img/bg-img/careers/offer/sports.svg'
    },
    {
        title: 'Regular compensation review',
        description: 'When you feel like your compensation needs to be reconsidered, you just make a corresponding request, no stress.',
        img: 'assets/img/bg-img/careers/offer/compensation_review.svg'
    },
    {
        title: 'Angular community activists',
        description: 'Valor is a JavaScript-focused company formed by the developer for developers. We contribute to open source, and we\'ve organized the first Angular conference in Ukraine ->ngTalks.io.',
        img: 'assets/img/bg-img/careers/offer/angular_community.svg'
    },
    {
        title: 'GDE on board',
        description: 'CEO Dmitriy Shekhovtsov is the first Angular Google Developer Expert in Ukraine, and he is also the author of the ngx-bootstrap library.',
        img: 'assets/img/bg-img/careers/offer/flat_str.svg'
    },
    {
        title: 'Open source',
        description: 'While everyone is mostly taking from open source, we think it’s time to give back. We maintain and contribute to various popular open-source projects, and you can too.',
        img: 'assets/img/bg-img/careers/offer/open_source.svg'
    },
    {
        title: 'Native English speakers',
        description: 'We have native speakers on board, some of them reside in Ukraine, and some – in the US, anyway, you can talk to them a lot in English classes or in your spare time.',
        img: 'assets/img/bg-img/careers/offer/english_speakers.svg'
    },
    {
        title: 'Culture of personal growth',
        description: 'We’re not crazy about being the best version of ourselves, but we recognize the necessity of moving forward to stay up to date, and we’ll help you uncover your best qualities.',
        img: 'assets/img/bg-img/careers/offer/personal_growth.svg'
    },
    {
        title: 'Pet-friendly',
        description: 'We had been pet-friendly long before it became mainstream. Valor hosts three cats, and we’re open if you’ll come over with your friendly pet to accompany us at work.',
        img: 'assets/img/bg-img/careers/offer/pet_friendly.svg'
    },
    {
        title: 'Comfort',
        description: 'You’ll find all you need and even more in the office, starting from treats like drinks and snacks, up to game and massage rooms, literature, people’s support, and cozy chairs :)',
        img: 'assets/img/bg-img/careers/offer/comfort.svg'
    }
];


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'careers',
    templateUrl: './careers-page.component.html'
})
export class CareersPageComponent {
    valuesList: {title: string; description:string}[] = ourValues;
    offers: {title: string; description:string; img: string}[] = offers;
}