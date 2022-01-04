import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from "@valor-software/common-docs";

const advantagesList = [
    {
        title: 'Shared Values',
        description: 'In the face of Valor, you’ll have a team that shares your values and anticipates your goals. We support diversity and believe in the equality of human rights. We also care about the well-being of animals, taking charge of a local shelter and providing a home for three cats.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/shared_values.svg'
    },
    {
        title: 'Transparency & Communication',
        description: 'Enjoy the highest level of transparency, including reports from Hubstaff and all the details of the team’s engagement with the project. We also ensure effective communication and accessibility to the Project Manager and the team. You’ll know about the current project phase, the following steps we’re taking, and you’ll be able to regulate the flow.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/transparency.svg'
    },
    {
        title: 'Integration with Your Set Processes',
        description: 'Assuming that your project may involve several stakeholders and development teams, we\'ll adjust to your existing processes. We’ll prepare all the needed documentation to start our collaboration and continue delivering project-related materials in the required form, quality, and quantity.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/integration.svg'
    },
    {
        title: 'Short Time To Market',
        description: 'Understanding that meeting the given time frames with the software delivery is the priority for you, we put functionality first. By prioritizing the development of crucial features, we decrease the time to market. So you can demonstrate the solution to stakeholders and start using it in the shortest period possible.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/shortTime.svg'
    },
    {
        title: 'Efficient Work with Feedback & Quick Deployment of Updates',
        description: 'Knowing that immediate reaction to users\' feedback and implementation of fixes can be life-saving, we\'re ready to address the requests and integrate changes ASAP. Valor has been working on the app for volunteers fighting against global hunger, and we felt that our reaction to users\' requests could influence the success of the whole mission. We\'ve handled the challenges straight away and backed up volunteers with reliable software to enable their mission on the other side of the globe.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/efficientWork.svg'
    }
];


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'nonProfit',
    templateUrl: 'nonProfit.component.html'
})
export class NonProfitComponent {
    changeBreadCrumbsPath: {path: string, title: string, excludePath?: boolean}[] = [
        {
            path: 'clients',
            title: 'clients',
            excludePath: true
        },
        {
            path: 'non-profit',
            title: 'For clients / Non-Profit Organizations'
        }
    ];

    advantages = advantagesList;
    articlesList = [
        'ngx-bootstrap_v7.0.0_is_officially_released!',
        'ngx-bootstrap_Angular_Ivy_is_here',
        'The_4_biggest_lessons_we_learned_while_building_a_startup_product_as_an_outsource_company'
    ];

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}
