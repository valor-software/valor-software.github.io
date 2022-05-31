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
        title: 'Integration with your Set Processes',
        description: 'Assuming that your project may involve several stakeholders and development teams, we\'ll adjust to your existing processes. We’ll prepare all the needed documentation to start our collaboration and continue delivering project-related materials in the required form, quality, and quantity.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/integration.svg'
    },
    {
        title: 'Short Time to Market',
        description: 'Understanding that meeting the given time frames with the software delivery is the priority for you, we put functionality first. By prioritizing the development of crucial features, we decrease the time to market. So you can demonstrate the solution to stakeholders and start using it in the shortest period possible.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/shortTime.svg'
    },
    {
        title: 'Efficient Work with Feedback & Quick Deployment of Updates',
        description: 'Knowing that immediate reaction to users\' feedback and implementation of fixes can be life-saving, we\'re ready to address the requests and integrate changes ASAP. Valor has been working on the app for volunteers fighting against global hunger, and we felt that our reaction to users\' requests could influence the success of the whole mission. We\'ve handled the challenges straight away and backed up volunteers with reliable software to enable their mission on the other side of the globe.',
        img: 'assets/img/bg-img/clients/advantages_non_profit/efficientWork.svg'
    }
];

const purposes = [
    {
        title: 'Staying on time & on tight budget',
        description: 'When it comes to humanitarian organizations, staying on time and budget is critical. Due to being publicly funded, the more efficiently you allocate the funds, the more people will get needed aid. We deliver the required scope of work and even exceed expectations within the restricted budget and timeframe.',
        img: 'assets/img/bg-img/clients/icons/onTime.svg'
    },
    {
        title: 'Building offline-first applications',
        description: 'Software-wise, it might be crucial that your solution works under extreme conditions. For example, in distant areas of the Earth, places of war, or natural disasters, the intermittent Internet connection is an issue, and an offline mode is a must. We know how to address this and other possible challenges.',
        img: 'assets/img/bg-img/clients/icons/offline.svg'
    },
    {
        title: 'Creating complex ecosystems',
        description: 'Sometimes rather than building applications we create complex ecosystems with connected devices. And we need to take care of a stable signal transmitting data between the software and the hardware, be it via Wi-Fi or Bluetooth.',
        img: 'assets/img/bg-img/clients/icons/ecosystem.svg'
    },
    {
        title: 'Providing post-launch support',
        description: 'Launching the product is just part of a job. You seek a reliable partner that can support and enhance the solution, promptly addressing users’ needs and new system requirements. We know what partnership means, and you can rely on us to efficiently maintain your products and build new ones.',
        img: 'assets/img/bg-img/clients/icons/support.svg'
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
    purposesList = purposes;
    advantages = advantagesList;
    articlesList = [ '31', '9', '11' ];

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}
