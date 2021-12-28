import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from "@valor-software/common-docs";

export interface ISchemaData {
    title: string;
    img?: string;
    clickable: boolean;
    icon?: string;
    color?: string;
    id?: string;
    arrow?: string;
    popover?: {
        title: string;
        list: string[];
        subTitle?: string;
    };
    showPopover?: boolean;
};

const advantagesList = [
    {
        title: 'Full-Cycle MVP Development',
        description: 'We’re not only about coding. We are about providing your MVP with all needed services from initial idea analysis to actual development and even creating all the documentation for smooth maintenance in the future. Launch your core product to the market to start acquiring your clients as soon as possible!',
        img: 'assets/img/bg-img/clients/advantages/mvp_dev.svg'
    },
    {
        title: 'Product Pivot',
        description: 'Your product is already on the market when suddenly you understand that users’ feedback suggests another path to successful market presence. Not a problem at all. Together we will find out the best option to implement changes with minimum time and money investment.',
        img: 'assets/img/bg-img/clients/advantages/prod_pivot.svg'
    },
    {
        title: 'Solid Project Management & Constant Team Involvementz',
        description: 'As we’re using the Agile approach to software development, you’ll see progress after each sprint. What’s more, we’re always open to brainstorm together and suggest several additional options, based on the successful company\'s experiences.',
        img: 'assets/img/bg-img/clients/advantages/solid_managment.svg'
    },
    {
        title: 'Investment into the future',
        description: 'Although we understand that quick market release is crucial for startups, working on the core functionality, we always think about the future of your product. That\'s why the solutions we offer are always scalable and maintainable.',
        img: 'assets/img/bg-img/clients/advantages/investment.svg'
    }
];
const schemaData: ISchemaData[][] = [
    [
        {
            title: 'Start',
            img: 'assets/img/icons/startup_schema/start.svg',
            clickable: false,
        },
        {
            title: 'Market research',
            icon: 'assets/img/icons/startup_schema/research.svg',
            clickable: false,
            color: 'pink'
        },
        {
            title: 'Business Analysis',
            icon: 'assets/img/icons/startup_schema/analysis.svg',
            clickable: false,
            color: 'pink'
        },
        {
            id: 'requiremants',
            title: 'Requirements document',
            icon: 'assets/img/icons/startup_schema/requirements.svg',
            clickable: false,
            color: 'pink'
        },
        {
            title: 'Discovery',
            icon: 'assets/img/icons/startup_schema/clickable.svg',
            clickable: true,
            popover: {
                title: 'So, what do you get as a result?',
                list: [
                    'The validated idea of your project that meets the <span>market needs</span>',
                    '<span>Features list</span> based on your requirements to the solution',
                    'Regular validations and updates on each step if it is what <span>you want and expect</span>'
                ]
            },
            showPopover: false
        }
    ],
    [
        {
            id: 'wireframes',
            title: 'Wireframes',
            icon: 'assets/img/icons/startup_schema/wireframes.svg',
            clickable: false,
            color: 'yellow',
            arrow: 'assets/img/icons/startup_schema/shortArrow.png'
        }
    ],
    [
        {
            title: 'Development process',
            icon: 'assets/img/icons/startup_schema/development.svg',
            clickable: false,
            color: 'blue'
        },
        {
            id: 'plan',
            title: 'Implementation plan',
            icon: 'assets/img/icons/startup_schema/plan.svg',
            clickable: false,
            color: 'blue',
            arrow: 'assets/img/icons/startup_schema/longArrow.png'
        },
        {
            title: 'Design',
            icon: 'assets/img/icons/startup_schema/clickable.svg',
            clickable: true,
            popover: {
                title: '<span>Congrats! The design part is completed.</span>',
                subTitle: 'What you\'ve got:',
                list: [
                    'With the created design you see <span>what the product be like.</span> It\'s high time to decide between turning back or hitting the gas.',
                    'You get a product prototype <span>you can actually iterate</span> with, wandering from one page to another.'
                ]
            }
        },
        {
            title: 'Clickable prototype',
            icon: 'assets/img/icons/startup_schema/prototype.svg',
            clickable: false,
            color: 'yellow'
        },
        {
            id: 'ui/ux',
            title: 'UX/UI',
            icon: 'assets/img/icons/startup_schema/uxUi.svg',
            clickable: false,
            color: 'yellow'
        },
    ],
    [
        {
            title: 'Testing',
            icon: 'assets/img/icons/startup_schema/testing.svg',
            clickable: false,
            color: 'blue'
        },
        {
            title: 'First version launch',
            icon: 'assets/img/icons/startup_schema/clickable.svg',
            clickable: true,
            popover: {
                title: 'Your product is live! What\'s next?',
                list: [
                    '<span>Monitor:</span><br> we teach you how to track users\' behaviour.',
                    '<span>Analyse:</span><br>It\'s time to collect user activity statistics to understand if you hit the nerve with your new product.',
                    '<span>Adapt:<span><br>Adjustments to match perfectly with the clients\' needs.'
                ]
            }
        }
    ]
];

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'startups',
    templateUrl: './startups.component.html'
})
export class StartupsComponent {
    changeBreadCrumbsPath: {path: string, title: string, excludePath?: boolean}[] = [
        {
            path: 'clients',
            title: 'clients',
            excludePath: true
        },
        {
            path: 'startups',
            title: 'For clients / Startups'
        }
    ];

    advantages = advantagesList;
    articlesList = [
        'The_4_biggest_lessons_we_learned_while_building_a_startup_product_as_an_outsource_company',
        'Designing_Aggregator_App_from_A_to_Z___Part_1',
        'Designing_Aggregator_App_from_A_to_Z___Part_2'
    ];
    schemaList: ISchemaData[][] = schemaData;

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }

    openPopover(item: ISchemaData) {
        if (!item.clickable) {
            return;
        }

        item.showPopover = true;
    }

}