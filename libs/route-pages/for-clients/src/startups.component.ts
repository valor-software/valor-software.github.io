import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from "@valor-software/common-docs";

const advantagesList = [
    {
        title: 'Full-Cycle MVP Development',
        description: 'We’re not only about coding. We are about providing your MVP with all needed services from initial idea analysis to actual development. We will also create all necessary documentation for smooth maintenance in the future.',
        img: 'assets/img/bg-img/clients/advantages/mvp_dev.svg'
    },
    {
        title: 'Product Pivot',
        description: 'Your product is already on the market when suddenly you understand that users’ feedback suggests another path to successful market presence. Not a problem at all. Together we will find out the best option to implement changes with minimum time and money investment',
        img: 'assets/img/bg-img/clients/advantages/prod_pivot.svg'
    },
    {
        title: 'Solid Project Management & Constant Team Involvement',
        description: 'As we’re using the Agile approach to software development, you’ll see progress after each sprint. What’s more, we’re always open to brainstorm together and suggest several additional options, based on the successful company\'s experiences.',
        img: 'assets/img/bg-img/clients/advantages/solid_managment.svg'
    },
    {
        title: 'Investment in the Future',
        description: 'Although we understand that quick market release is crucial for startups, working on the core functionality, we always think about the future of your product. That\'s why the solutions we offer are always scalable and maintainable.',
        img: 'assets/img/bg-img/clients/advantages/investment.svg'
    }
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
    articlesList = [ '11', '27', '28'];

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}
