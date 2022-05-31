import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from "@valor-software/common-docs";

const advantagesList = [
    {
        title: 'Ample Range of Services',
        description: 'You’ll be covered in all aspects of software development, including UX/UI design, custom web and mobile development, and QA services. We also provide experts in product ownership and project management and assist you in writing proper project documentation.',
        img: 'assets/img/bg-img/clients/advantages_smbs/ample_range.svg'
    },
    {
        title: 'Transparency',
        description: 'You’ll appreciate Valor’s transparent, clear, and easy-to-follow development flow. Being regularly updated on the status of your project with the reports, sprint overviews, and retrospective results, you’ll know exactly what is the current project stage and what exactly is the next thing you’re getting.',
        img: 'assets/img/bg-img/clients/advantages_smbs/transparency.svg'
    },
    {
        title: 'Self-Sufficient Team',
        description: 'In case of any questions, reach out to your project manager (PM) and get the assistance you need. Valor’s PMs are not just well-trained in project management methodologies but also are technically savvy. You’ll get an immediate response to any possible requests you might have, be it regarding the development team, project flow, performance, etc.',
        img: 'assets/img/bg-img/clients/advantages_smbs/self-sufficient.svg'
    },
    {
        title: 'Long-Term Engagement',
        description: 'With Valor, you opt for a software development partner and a full-fledged team extension that shares your values, ambitions, and goals.\n' +
            '\n' +
            'As we care about retention, you may count on your remote engineers to stay with the project in the long run. \n' +
            '\n' +
            'Also, with an option for an interim team extension, you may draw a particular expert, let’s say a QA Automation or a DevOps Engineer when your project needs them the most.',
        img: 'assets/img/bg-img/clients/advantages_smbs/long-term_engagement.svg'
    },
    {
        title: 'Openness & Communication',
        description: 'With daily chats and Scrum meetings, you’ll feel like your new team members are sitting right next door. They’ll also adapt your regular flow and processes.\n' +
            '\n' +
            'In addition to being internationally oriented, speaking English freely, and sharing universal values, Valorians appreciate personal growth. We have personal growth plans for every team member, despite seniority, because that’s the only way to grow and prosper.',
        img: 'assets/img/bg-img/clients/advantages_smbs/opennesse_communication.svg'
    }
];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'small-medium-businesses',
    templateUrl: './smallMediumBusinesses.component.html'
})
export class SmallMediumBusinessesComponent {
    changeBreadCrumbsPath: {path: string, title: string, excludePath?: boolean}[] = [
        {
            path: 'clients',
            title: 'clients',
            excludePath: true
        },
        {
            path: 'smbs',
            title: 'For clients / Small to medium-sized businesses'
        }
    ];

    advantages = advantagesList;
    articlesList = [
        '29', '15', '21', '22', '23', '24'
    ];

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}