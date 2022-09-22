import { Component } from '@angular/core';
import { ContactModalComponent, ITechnologiesCard, ModalService } from '@valor-software/common-docs';
import SwiperCore, { Pagination } from "swiper";
import { IServicesHeader } from '../../components/service-header-card/service-header-card.component';
import { ITraitsCard } from '../../components/traits-cards/traits-cards.component';

SwiperCore.use([Pagination]);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'design',
  templateUrl: './design.component.html'
})
export class DesignComponent {

  servicesHeader: IServicesHeader = {
    title: 'Design',
    descriptions: ['Designing solutions with users in mind, we strive to make their journey an intuitive and breathtaking adventure. Therefore before proceeding with UI, we help you define the frustrations of your audience and cover them with optimal UX.'],
    img: 'assets/img/bg-img/services_img/services_1.svg',
    button: {
      title: 'Get a free UX audit'
    },
    bradCrumb: {
      path: 'design',
      title: 'Design'
    }
  };

  uxAuditCards: IServicesHeader[] = [
    {
      title: 'Business objectives checkup',
      descriptions: [
        'From a series of interviews with stakeholders, we get a comprehensive view of present business goals and ongoing issues that stand in the way of growth.'
      ],
      img: 'assets/img/bg-img/services_img/design/ux-audit/objectives_checkup.png',
      button: {
        title: 'Get started'
      }
    },
    {
      title: 'Conducting user survey',
      descriptions: [
        'Valor’s design team will take a deep dive into the customer experience and goals to discover the hidden potential for improvement through online surveys and A/B testing.'
      ],
      img: 'assets/img/bg-img/services_img/design/ux-audit/user_survey.png',
      button: {
        title: 'View a case study'
      }
    },
    {
      title: 'Gathering user analytics',
      descriptions: [
        'With the help of Google Analytics and other tools, we’ll analyze how customers move through your platform and see at what stage of the journey users tend to drop off.'
      ],
      img: 'assets/img/bg-img/services_img/design/ux-audit/user_analytics.png',
      button: {
        title: 'Get user behaviour analytics'
      }
    },
    {
      title: 'Usability checkup',
      descriptions: [
        'Finally, we want to make sure your product keeps up with the UX best practices and usability heuristics. If the icons’ are not obvious, or the website navigation is tricky, let’s fix it!'
      ],
      img: 'assets/img/bg-img/services_img/design/ux-audit/usability_checkup.png',
      button: {
        title: 'Get a free website usability check'
      }
    },
    {
      title: 'A report and an action plan',
      descriptions: [
        'We’ll conveniently visualize audit results for you using sitemaps, wireframes, and user flows. You’ll get valuable insights and a list of actions you should take to skyrocket UX.'
      ],
      img: 'assets/img/bg-img/services_img/design/ux-audit/action_plan.png',
      button: {
        title: 'Order UX audit'
      }
    }
  ];

  uxUiDesignCards: IServicesHeader[] = [
    {
      title: 'User Research & Analysis',
      descriptionHierarchy: [
        { description: 'Who’s the right audience for my product?', subDescription: 'User persona & user journey' },
        { description: 'How is my product different from others on the market?', subDescription: 'Competitors’ analysis' },
        { description: 'What are the frustrations of my audience?', subDescription: 'UX research' },
        { description: 'What are the killer features?', subDescription: 'Product structure & strategy' }
      ],
      img: 'assets/img/bg-img/services_img/design/ux-ui-design/research_analysis.png'
    },
    {
      title: 'Information Architecture',
      descriptionHierarchy: [
        { description: 'How do different software pieces fit together?', subDescription: 'Mind map' },
        { description: 'How many screens/pages are we going to have?', subDescription: 'Site map' },
        { description: 'What’s the user journey?', subDescription: 'Navigation map' },
        { description: 'What’s the screen order?', subDescription: 'Labeling' }
      ],
      img: 'assets/img/bg-img/services_img/design/ux-ui-design/information_architecture.png'
    },
    {
      title: 'Wireframing & prototyping',
      descriptionHierarchy: [
        { description: 'Can I see different interface options?', subDescription: 'Sketches to visualize UI ideas' },
        { description: 'What’s the content and the UX elements?', subDescription: 'Wireframes' },
        { description: 'How will the user navigate through?', subDescription: 'Low-level prototype' },
        { description: 'How does user interaction work?', subDescription: 'Clickable prototype' }
      ],
      img: 'assets/img/bg-img/services_img/design/ux-ui-design/wireframing_prototyping.png'
    },
    {
      title: 'UI Design',
      descriptionHierarchy: [
        { description: `What's the color palette?`, subDescription: 'Moodboard' },
        { description: `What's the icon style?`, subDescription: 'UI style guide' },
        { description: `What's the final look?`, subDescription: 'A complete design of a product with a unique visual style' }
      ],
      img: 'assets/img/bg-img/services_img/design/ux-ui-design/ui_design.png'
    },
    {
      title: 'Testing and Validation',
      descriptionHierarchy: [
        { description: `Are we on the right track or is smth missing?`, subDescription: 'Implementation of fixes & finishing touches' },
        { description: `What unforeseen user difficulties have we spotted?`, subDescription: 'Getting user feedback' },
        { description: `What will make the user experience with the app even better?`, subDescription: 'Usability testing evaluation' }
      ],
      img: 'assets/img/bg-img/services_img/design/ux-ui-design/testing_validation.png'
    }
  ];

  toolsCards: ITechnologiesCard[] = [
    {
      title: 'Designing',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/figma.png',
          tooltip: 'Figma'
        },
        {
          src: 'assets/img/technologies/others/miro.png',
          tooltip: 'Miro'
        },
        {
          src: 'assets/img/technologies/others/xmind.png',
          tooltip: 'Xmind'
        }
      ]
    },
    {
      title: 'Launching',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/webflow.png',
          tooltip: 'Webflow'
        },
        {
          src: 'assets/img/technologies/others/zapier.png',
          tooltip: 'Zapier'
        }
      ]
    },
    {
      title: 'Presentation',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/invision.png',
          tooltip: 'InVision'
        },
        {
          src: 'assets/img/technologies/others/creative_cloud.png',
          tooltip: 'Creative Cloud'
        }
      ]
    },
    {
      title: 'Testing',
      smJustify: 'between',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/google_marketing.png',
          tooltip: 'Google Marketing'
        },
        {
          src: 'assets/img/technologies/others/google_forms.png',
          tooltip: 'Google Forms'
        },
        {
          src: 'assets/img/technologies/others/useberry.png',
          tooltip: 'Useberry'
        }
      ]
    },
  ];

  traitsCard: ITraitsCard[] = [
    {
      title: 'Ahead of design trends',
      description: `The digital design industry is constantly evolving, and Valor’s design team monitors dynamics and keeps up to the pace. Being passionate about UX and UI, they take courses and participate in dedicated conferences. So when you partner up with Valor, you have the biggest fans of design working for your product and your audience. Visit a post-graduation case study of one of the designers to learn more.`,
      img: 'assets/img/bg-img/services_img/design/traits/design_trends.png'
    },
    {
      title: 'Mature delivery process',
      description: `We strive to make our collaboration with the clients transparent and predictable. So we have a particular flow for every stage when we iterate with you on team syncs, give progress updates, and make demos. This way, you always know where your project is now, what's coming next, and control the result. Learn more about the process of building solutions from scratch from the Startups dedicated page.`,
      img: 'assets/img/bg-img/services_img/design/traits/delivery_process.png'
    },
    {
      title: 'Knowledge exchange',
      description: 'We have one of the most close-knit and well-coordinated design teams you can ever imagine. Folks made experience exchange part of their schedule with regular sessions when each presents on a hot topic. Embracing curiosity and collective knowledge, we can find more efficient solutions to your business challenges.',
      img: 'assets/img/bg-img/services_img/design/traits/knowledge_exchange.png'
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