import { Component } from '@angular/core';
import {ContactModalComponent, ModalService} from "@valor-software/common-docs";

const advantagesList = [
    {
        title: 'Efficiency Acceleration',
        description: 'We’ll make a comprehensive system analysis and introduce quality changes to boost operational efficiencies and reduce the execution time of your program.',
        img: 'assets/img/bg-img/clients/advantages_enterprises/acceleration.svg'
    },
    {
        title: 'Access to IT Talents',
        description: 'Fill your company\'s skill gap with Valor\'s unique talent blend. We\'ll back you up at every stage of software development and prove competency in processes at every level of business.',
        img: 'assets/img/bg-img/clients/advantages_enterprises/itTalants.svg'
    },
    {
        title: 'Freeing up your Team’s Time',
        description: 'You can entrust the scope of work to your self-sufficient team at Valor with no supervision. While you focus on business objectives, we deliver excellent results within the agreed time and budget.',
        img: 'assets/img/bg-img/clients/advantages_enterprises/teamsTime.svg'
    },
    {
        title: 'Strict and Reliable Processes',
        description: 'You can rely on us applying best practices and following proven processes. We have documented guidelines for every step, starting from onboarding to product offboarding. And we follow management system standards relevant to your particular business needs and your current product stage.',
        img: 'assets/img/bg-img/clients/advantages_enterprises/strictProcess.svg'
    },
    {
        title: 'Risk Management',
        description: 'Ensure your system is holistic and ready to meet IT security standards. We’ll help you mitigate possible risks and proactively eliminate infrastructure vulnerabilities before they may pose a threat to your business.',
        img: 'assets/img/bg-img/clients/advantages_enterprises/riskManagement.svg'
    },
    {
        title: 'Plan for your Strategic Growth',
        description: 'Maximize your potential for business growth with solutions that give you a competitive advantage and fulfill your long-term strategy. We’ll utilize technologies that empower your organization.',
        img: 'assets/img/bg-img/clients/advantages_enterprises/stratagicGrowth.svg'
    }
];


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'enterprises',
    templateUrl: 'enterprises.component.html'
})
export class EnterprisesComponent {
    changeBreadCrumbsPath: {path: string, title: string, excludePath?: boolean}[] = [
        {
            path: 'clients',
            title: 'clients',
            excludePath: true
        },
        {
            path: 'enterprises',
            title: 'For clients / Enterprises'
        }
    ];

    advantages = advantagesList;
    articlesList = [ '29', '15', '19'];
    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}
