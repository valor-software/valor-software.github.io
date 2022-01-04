import { Component } from '@angular/core';
import { ModalService } from "@valor-software/common-docs";
import { PopoverModalComponent } from "./popoverModal.component";
import {CurrentPopoversService} from "./currentPopovers.service";

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
                title: 'Congrats! The design part is completed.',
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
                    '<span>Adapt:</span><br>Adjustments to match perfectly with the clients\' needs.'
                ]
            }
        }
    ]
];

const schemaDataResp: ISchemaData[][] = [
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
        }
    ],
    [
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
        {
            id: 'wireframes',
            title: 'Wireframes',
            icon: 'assets/img/icons/startup_schema/wireframes.svg',
            clickable: false,
            color: 'yellow',
            arrow: 'assets/img/icons/startup_schema/shortArrowResp.svg'
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
            title: 'Design',
            icon: 'assets/img/icons/startup_schema/clickable.svg',
            clickable: true,
            popover: {
                title: 'Congrats! The design part is completed.',
                subTitle: 'What you\'ve got:',
                list: [
                    'With the created design you see <span>what the product be like.</span> It\'s high time to decide between turning back or hitting the gas.',
                    'You get a product prototype <span>you can actually iterate</span> with, wandering from one page to another.'
                ]
            }
        },
        {
            id: 'plan',
            title: 'Implementation plan',
            icon: 'assets/img/icons/startup_schema/plan.svg',
            clickable: false,
            color: 'blue',
            arrow: 'assets/img/icons/startup_schema/straightArrow.svg'
        },
        {
            title: 'Development process',
            icon: 'assets/img/icons/startup_schema/development.svg',
            clickable: false,
            color: 'blue'
        },
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
                    '<span>Adapt:</span><br>Adjustments to match perfectly with the clients\' needs.'
                ]
            }
        }
    ]
];

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

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'process-scheme',
    templateUrl: './process-scheme.component.html'
})
export class ProcessSchemeComponentComponent {
    schemaList: ISchemaData[][] = schemaData;
    schemeListResp: ISchemaData[][] = schemaDataResp;

    constructor(
        private modalService: ModalService<PopoverModalComponent>,
        private currentPopoverServ: CurrentPopoversService

    ) {
    }

    openPopover(item: ISchemaData) {
        if (!item.clickable) {
            return;
        }

        item.showPopover = true;
    }

    openPopoverModal(item?: {title: string, subTitle?: string, list: string[]}) {
        if (!item) {
            return;
        }
        this.currentPopoverServ.currentPopover = item;
        this.modalService.open(PopoverModalComponent);
    }

}