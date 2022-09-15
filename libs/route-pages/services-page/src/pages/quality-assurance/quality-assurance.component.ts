import { Component } from '@angular/core';
import { ITechnologiesCard } from '@valor-software/common-docs';
import SwiperCore, { Pagination } from "swiper";
import { IHierarchyServiceCard } from '../../components/hierarchy-service-card/hierarchy-service-card.component';
import { IServicesHeader } from '../../components/service-header-card/service-header-card.component';
import { ITraitsCard } from '../../components/traits-cards/traits-cards.component';

SwiperCore.use([Pagination]);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'quality-assurance',
  templateUrl: './quality-assurance.component.html'
})
export class QualityAssuranceComponent {

  servicesHeader: IServicesHeader = {
    title: 'Quality Assurance',
    descriptions: ['Valor provides an organized and comprehensive approach towards quality assurance because testing is not a project phase, it actually drives the development forward.'],
    img: 'assets/img/bg-img/services_img/services_3.svg',
    button: {
      title: 'Sign up for an accessibility audit'
    },
    bradCrumb: {
      path: 'quality-assurance',
      title: 'Quality Assurance'
    }
  };

  hierarchyServiceCard: IHierarchyServiceCard[] = [
    {
      title: 'Test strategy, planning, & setup of QA process',
      description: 'The success of a quality assurance flow lies not in the number of experts involved but in the quality analysis of users’ pain points and the value you deliver to them. Starting from defining the bottlenecks of your product and the areas for improvement, we’ll create a custom testing strategy that aligns with the goals of your business.',
      subtitle: 'Deliverables',
      items: [
        { title: 'Project quality risk analyses, acceptance criteria' },
        { title: 'Estimation of the testing effort' },
        { title: 'Test levels defined' },
        { title: 'Detailed plan for testing activities' }
      ],
      button: { title: 'Get started' }
    },
    {
      title: 'QA automation',
      description: 'With automated testing being a driver for every new release, we improve the software quality, ensure the integrity of the critical business features, and speed up delivery. Valor can build a custom test automation pipeline that will involve <b><u>performance and load testing</b></u> to prepare your solution for heavy traffic and scaling according to your business needs.',
      subtitle: 'Testing activity',
      items: [
        { title: 'E2E Testing', subItems: ['Functionality', 'Feature integration', 'Regression', 'Performance testing under product-like circumstances'] },
        { title: 'Cross-browser testing' },
        { title: 'API testing' },
        { title: 'Accessibility testing' },
        { title: 'Performance testing', subItems: ['Scalability testing', 'load testing'] }
      ],
      button: { title: 'Sign up for an accessibility audit' }
    },
    {
      title: 'Manual testing',
      description: 'By testing, we explore new perspectives from which we look at the software and notice room for improvement. So, alongside automating, let’s say, static test cases, we leave the space for discovering not trivial users’ scenarios and spotting unexpected issues. With the combination of manual and automated testing, we help your product evolve in the user-facing direction.',
      subtitle: 'Testing activity',
      items: [
        { title: 'Functional feature testing' },
        { title: 'API testing' },
        { title: 'Regression testing' },
        { title: 'Writing test documentation' },
        { title: 'Cross-browser testing' },
        { title: 'Testing of applications on physical devices' }
      ],
      button: { title: 'Meet your engineer' }
    },
    {
      title: 'Mobile app testing',
      description: 'Mobile solutions are usually more complex to test because they have more users and need to run on various devices. With a blend of manual testing and automated scripts, we cover primary user flows, check cross-platform coverage, performance, APIs, and ensure a flawless experience for your users. Also, we provide you with means for monitoring the progress.',
      subtitle: 'Testing activity',
      items: [
        { title: 'Writing test documentation' },
        { title: 'Usability testing' },
        { title: 'API testing' },
        { title: 'Cross-browser testing' },
        { title: 'Testing of applications on physical devices' },
        { title: 'Performance testing' },
        { title: 'Regression testing' }
      ],
      button: { title: 'Test your mobile app performance' }
    },
    {
      title: 'CI/CD pipelines',
      description: 'We’ll empower your solution with a self-sufficient DevOps that accelerates the efforts of developers and quality engineers and allows continuous integration, delivery, and deployment of updates to production. Streamline the release cycle and ship awaited features regularly with testing built in the automation flow.',
      subtitle: 'Testing activity',
      items: [
        { title: 'Continuous testing pipeline' },
        { title: 'More accurate tests' },
        { title: 'Automated orchestration & deployment' },
        { title: 'Better code quality' },
        { title: 'Shorter time to market' }
      ],
      button: { title: 'Set up your CI/CD pipeline' }
    }
  ];

  traitsCards: ITraitsCard[] = [
    {
      title: 'The culture of quality',
      description: 'When it comes to <b><u>the development of a software product</b></u>, the faster you get feedback from users, the better you can iterate and adjust with minimum loss. We strive to embed quality control in every stage of the development cycle and reduce the loop for getting users’ feedback. In this way, you deliver more regularly and cost-effectively to a more loyal audience.',
      img: 'assets/img/bg-img/services_img/quality-assurance/traits/quality-culture.png'
    },
    {
      title: 'Innovation',
      description: 'We believe that staying ahead of the curve in terms of tools and technologies is the only way to progress and build solutions that can serve clients not just today but tomorrow. We constantly monitor the latest industry trends and apply <b><u>edge technologies</b></u> that help optimize workflows and use automation to the fullest. Find more about automation and the cloud on the <b><u>DevOps page</b></u>.',
      img: 'assets/img/bg-img/services_img/quality-assurance/traits/innovation.png'
    },
    {
      title: 'Agility',
      description: 'Valor’s quality assurance experts follow the principles of Agile and have regular syncs, updates with the client, reviews, and retrospectives. Even though our QA strategy is measured, we are ready to adjust it to the fast-paced business environment and address new market requirements for your solution with prompt reprioritizing. <b><u>Managers</b></u> will help adapt priorities and balance the load between team members.',
      img: 'assets/img/bg-img/services_img/quality-assurance/traits/agility.png'
    },

  ];

  toolsCards: ITechnologiesCard[] = [
    {
      title: 'QA automation',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: "assets/img/technologies/active/cypress.png",
        },
        {
          src: "assets/img/technologies/others/io.png",
        },
        {
          src: "assets/img/technologies/others/cucumber.png",
        },
        {
          src: "assets/img/technologies/others/post-man.png",
        },
        {
          src: "assets/img/technologies/others/browser-stack.png",
        },
        {
          src: "assets/img/technologies/others/sauce-labs.png",
        },
        {
          src: "assets/img/technologies/others/qa.png",
        },
        {
          src: "assets/img/technologies/others/apache.png",
        },
        {
          src: "assets/img/technologies/others/arc.png",
        },
      ]
    },
    {
      title: 'Manual testing',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: "assets/img/technologies/others/post-man.png",
        },
        {
          src: "assets/img/technologies/active/lang.png",
        },
        {
          src: "assets/img/technologies/others/qase.png",
        },
        {
          src: "assets/img/technologies/others/testrail.png",
        }
      ]
    },
    {
      title: 'Mobile app testing',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: "assets/img/technologies/others/browser-stack.png",
        },
        {
          src: "assets/img/technologies/others/sauce-labs.png",
        },
        {
          src: "assets/img/technologies/others/appium.png",
        }
      ]
    },
    {
      title: 'CI/CD pipelines',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: "assets/img/technologies/others/travis-ci.png",
        },
        {
          src: "assets/img/technologies/others/actions.png",
        },
        {
          src: "assets/img/technologies/active/lang.png",
        },
        {
          src: "assets/img/technologies/others/confluence.png",
        }
      ]
    },
  ];

}