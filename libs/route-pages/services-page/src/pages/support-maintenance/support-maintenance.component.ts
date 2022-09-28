import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from '@valor-software/common-docs';
import SwiperCore, { Pagination } from "swiper";
import { IServicesHeader } from '../../components/service-header-card/service-header-card.component';
import { ITraitsCard } from '../../components/traits-cards/traits-cards.component';

SwiperCore.use([Pagination]);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'support-maintenance',
  templateUrl: './support-maintenance.component.html'
})
export class SupportMaintenanceComponent {

  servicesHeader: IServicesHeader = {
    title: 'Support & Maintenance',
    descriptions: ['Valor can help you in various ways, starting from the support of solutions that leverage open-source technologies up to the scale of your enterprise-level systems and the transformation of your customer service with AI.'],
    img: 'assets/img/bg-img/services_img/services_5.svg',
    button: {
      title: 'Contact us'
    },
    bradCrumb: {
      path: 'support-&-Maintenance',
      title: 'Support & Maintenance'
    }
  };

  initialCards: IServicesHeader[] = [
    {
      title: 'Enterprise Support',
      descriptions: [
        `We help enterprise companies modernize their infrastructures and train their employees with new technologies and facilities. If you feel like outdated infrastructures are dragging you down, and you’re unsure if the personnel is ready for change, Valor can help. We’ll safeguard your apps’ security and smooth operations while guiding your team to get along with the renovation.`,
        `We’ll start with your current system audit and define the bottlenecks. Then we’ll offer several ways of your legacy system modernization on code and the infrastructure levels. After implementation of upgrades and optimization, we’ll assemble a maintenance team of experts or provide your engineers with an essential knowledge base.`
      ],
      button: {
        title: 'Learn more'
      },
      imgCards: [
        { title: 'Cloud consulting & team training', img: 'assets/img/bg-img/services_img/support-maintenance/cards/cloud_consulting.png' },
        { title: 'System audit & workloads setup', img: 'assets/img/bg-img/services_img/support-maintenance/cards/system_audit.png' },
        { title: 'Infrastructure support & maintenance', img: 'assets/img/bg-img/services_img/support-maintenance/cards/support_maintenance.png' }
      ]
    },
    {
      title: 'IT Support Process Setup',
      descriptions: [
        `We can help you optimize your customer support processes and the efforts of your support team. If you feel like there’s a better way to collect, distribute and resolve user requests, Valor can skyrocket your solution.`,
        `We’ve had a great deal of success in automating and advancing the support system for the enterprise-level marketing SAAS vendor. We’ve implemented a complicated chatbot functionality powered by artificial intelligence and provided more accurate ticket allocation. What’s more, now they offer users an extended support knowledge base and unique playbooks for every audience.`,
        `Let us automate repetitive support flows and increase users’ satisfaction with advanced AI-based scenarios crafted for your business.`
      ],
      button: {
        title: 'Automate customer support '
      },
      imgCards: [
        { title: 'Support system setup', img: 'assets/img/bg-img/services_img/support-maintenance/cards/system_setup.png' },
        { title: 'Chatbot advanced functions', img: 'assets/img/bg-img/services_img/support-maintenance/cards/chatbot.png' },
        { title: 'UI and Admin Panel modernization', img: 'assets/img/bg-img/services_img/support-maintenance/cards/admin_panel.png' }
      ]
    },
    {
      title: 'Open-Source Support',
      descriptions: [
        `Valorians are big fans of Open Source Software (OSS) and active contributors. We believe it's important to not just take from OSS but give back with knowledge-sharing, tooling, and professional services. In Valor, you’ll find true experts who know the technology from the inside-out.`
      ],
      button: {
        title: 'Consult an expert'
      },
      imgCards: [
        { title: 'Technology workshops and training sessions', img: 'assets/img/bg-img/services_img/support-maintenance/cards/technology_workshops.png' },
        { title: 'Bug fixing and troubleshooting', img: 'assets/img/bg-img/services_img/support-maintenance/cards/bug_fixing.png' },
        { title: 'Application development & modernization', img: 'assets/img/bg-img/services_img/support-maintenance/cards/application_development.png' }
      ]
    }
  ];

  bgCards: IServicesHeader[] = [
    {
      title: 'Need any help with NativeScript?',
      descriptions: [
        'Being <a href="https://nativescript.org/partners/" target="_blank"><b><u>official partners</u></b></a> and contributors to NativeScript, we can help you make the most value out of this technology for your business. Valor supports teams who are just starting out with NS and those who already have NativeScript apps and struggle to maintain them.',
        `We have a proven record of projects successfully delivered using NativeScript, and there’s a big chance that we’ve already found a way to solve the problem your team might be facing. With access to people who add to the framework’s functionality, you'll have support from the primary knowledge source.`
      ],
      img: 'assets/img/bg-img/services_img/support-maintenance/bg-cards/native.png',
      button: {
        title: 'Visit portfolio',
        url: '/projects'
      }
    },
    {
      title: 'Empowering Angular for business',
      descriptions: [
        `Companies that use Angular legacy versions face restrictions in efficiency, speed, and the limited functionality of the framework. They also can hardly find engineers to support the codebase. Valor will help you upgrade to new versions and prepare your staff for modular architecture.`,
        `Valor has been a leader in the Angular dev space since 2013, with one of the strongest Angular expertise inside the company. We’re the creators of numerous community libraries, including <a href="https://valor-software.com/ngx-bootstrap/#/" target="_blank"><b><u>ngx-bootstrap</u></b></a>. Not to mention that we sponsor Angular-dedicated conferences with the CEO being a <a href="https://www.youtube.com/watch?v=EIDedyjgWyc" target="_blank"><b><u>regular speaker</u></b></a>. We can help you migrate from AngularJS to Angular, consult your team on solving particular challenges, or make training from beginner to advanced level.`
      ], img: 'assets/img/bg-img/services_img/support-maintenance/bg-cards/angular.png',
      button: {
        title: 'Submit for a workshop'
      }
    },
    {
      title: 'Built to last with NestJS',
      descriptions: [
        `As <a href="https://nestjs.com/" target="_blank"><b><u>Principal NestJS Sponsors</u></b></a> and evangelists, we can help you utilize best practices and maximize the performance of your application. Turn for assistance in the app upgrade, technical guidance, and team mentorship.`,
        `Based on TypeScript on top of Node.js, NestJS allows building enterprise-grade platforms that are easy to operate and scale. As it borrows a lot of concepts from Angular, you can focus on the design of endpoints and provide consumers with the best possible APIs.`,
        `Valor’s been trusted with not just modernization using NestJS, but training for teams who have used Java and .NET for server-side before. We can bring your engineers up to speed with the technology and ensure you feel comfortable using Nest.`
      ],
      img: 'assets/img/bg-img/services_img/support-maintenance/bg-cards/nest_js.png',
      button: {
        title: 'Get our help'
      }
    },
    {
      title: 'Get the most out of your Vue!',
      descriptions: [
        `Besides being the first choice technology for sufficient MVPs and development from scratch, Vue.js offers you more than that! You can enhance your server-side applications with a richer and more interactive experience. Also, the framework allows you to scale and add to the business logic providing a set of libraries and an ecosystem.`,
        `We’ve been practicing Vue.js and building up our expertise since the moment of its first launch. You can partner with Valor for building Vue applications from scratch or give a fresh start to your legacy solutions.`
      ],
      img: 'assets/img/bg-img/services_img/support-maintenance/bg-cards/vue.png',
      button: {
        title: 'Start an upgrade'
      }
    }
  ];

  headCards = [
    {
      title: 'Product Ownership',
      description: 'A product owner is a person who always knows what’s the next turn that the product should take to succeed. Valor’s PO will help you transform your product vision into user stories and ensure your solution moves towards higher user satisfaction and draws new loyal audiences.',
      fragments: [{ title: 'Value', path: 'po-value' }, { title: 'Benefits', path: 'po-benefits' }],
      button: { title: 'Establish a product team' }
    },
    {
      title: 'Project Management',
      description: 'While PO looks at a project from the product value perspective, the project manager is up to every single organizational detail. Valor’s PM will take charge of the product delivery process and help every team member perform at their best.',
      fragments: [{ title: 'Value', path: 'pm-value' }, { title: 'Benefits', path: 'pm-benefits' }],
      button: { title: 'Improve your team performance' }
    },
  ];

  traitsCard: ITraitsCard[] = [
    {
      title: 'Unique open-source expertise',
      description: `While most engineers perceive technologies primarily from the consumer’s perspective, Valorians get under the hood and know how the tooling is built. We’ve created many Angular community libraries, including <a href="https://valor-software.com/ngx-bootstrap/#/" target="_blank"><b><u>ngx-bootstrap</u></b></a>, with hundreds of thousands of users. This unique experience empowers us to find new non-standard ways of how technology can solve your particular business problems.`,
      img: 'assets/img/bg-img/services_img/support-maintenance/traits/open_source.png'
    },
    {
      title: 'Enterprise proficiency',
      description: `A proven record of successful <a href="/projects/terminus" target="_blank"><b><u>migrations and modernizations</u></b></a> of legacy infrastructures makes Valor ready for this kind of challenge. We know how crucial security is for you alongside innovation, so we move step-by-step, with regular reporting and careful maintenance of project documentation. Lear more about Valor's capabilities for enterprise from <a target="_blank" href="/clients/enterprises"><b><u>the dedicated page</b></u></a>.`,
      img: 'assets/img/bg-img/services_img/support-maintenance/traits/enterprise_proficiency.png'
    },
    {
      title: 'Team maturity',
      description: 'The majority of Valor’s engineers have over 4 years of experience in programming and quality assurance. So you entrust the work to masters who do not require additional control and supervision. As self-development and training are part of our <a target="_blank" href="/careers"><b><u>company’s culture</b></u></a>, every team member has an individual growth plan despite their seniority level.',
      img: 'assets/img/bg-img/services_img/support-maintenance/traits/team_maturity.png'
    }
  ];


  constructor(
    private modalService: ModalService<ContactModalComponent>
  ) {
  }

  openModal() {
    this.modalService.open(ContactModalComponent);
  }

}