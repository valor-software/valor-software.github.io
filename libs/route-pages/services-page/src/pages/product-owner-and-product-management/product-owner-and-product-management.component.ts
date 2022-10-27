import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from '@valor-software/common-docs';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { ITraitsCard } from '../../components/traits-cards/traits-cards.component';
import { IVerticalServicesCard } from '../../components/vertical-services-card/vertical-services-card.component';

SwiperCore.use([Pagination]);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'product-owner-and-product-management',
  templateUrl: './product-owner-and-product-management.component.html'
})
export class ProductOwnershipAndProjectManagementComponent {
  blogPagePath = '/articles';

  changeBreadCrumbTitle: { path: string, title: string, excludePath?: boolean }[] = [
    {
      path: 'services',
      title: 'Services',
    },
    {
      path: 'product-ownership-and-project-management',
      title: 'Product Ownership and Project Management'
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

  poBenefitsCard: ITraitsCard[] = [
    {
      title: 'Unified product vision',
      description: 'As a product usually has several stakeholders who have their vision and might emphasize different aspects, PO comes for help. Valor’s experts will synchronize all the product goals and define a shared vision.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/po-benefits/product_vision.png'
    },
    {
      title: 'Focus on users',
      description: 'In the face of PO, you have the one who devotedly monitors users’ satisfaction. Through early user interaction studies and A/B testing, Valor’s product owner constantly defines the way for product evolution and advocates customer interests to the team.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/po-benefits/focus_on_users.png'
    },
    {
      title: 'Sound product backlog',
      description: 'The backlog with high-priority user stories is another place of action where Valor’s PO performs. Together with the Scrum Master, they groom the backlog items and prepare the board for upcoming sprints.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/po-benefits/product_backlog.png'
    },
    {
      title: 'Boost in product value',
      description: 'The product owner cares to increase the value of the product for users and the business. Valor’s PO quantifies the ROI of new features as well as sales and marketing activities to optimize budget distribution and maximize product worth..',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/po-benefits/boost_product_value.png'
    },
    {
      title: 'New requirements articulated',
      description: 'Sometimes priorities for the project shift, but the dev team doesn’t have sufficient detail to take the new part of the work into the sprint. So, the PO balances new requirements with the original product vision and transforms them into a clear goal.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/po-benefits/new_requirements.png'
    },
    {
      title: 'Improved sprint velocity',
      description: `PO oversees sprints, monitors the amount of value delivered, and suggests improvements to the process. On the other hand, the product owner shields the team from business influences and requirements engineering. Learn more about the benefits the PO role brings to the project <a class="pointer-events-auto" href="/articles/the-4-biggest-lessons-we-learned-while-building-a-startup-product-as-an-outsource-company" target="_blank"><b><u>from the blog</b></u></a>.`,
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/po-benefits/improved_sprint.png'
    }
  ];

  pmBenefitsCard: ITraitsCard[] = [
    {
      title: 'Custom approach to your project',
      description: `No project is the same, so we pick the approach to project management that will suit your product best. This includes the choice of PM and configuration management tools, frequency of syncs with the stakeholders, optimal sprint duration, etc.`,
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/pm-benefits/custom_approach.png'
    },
    {
      title: 'Tech-savvy managers',
      description: `Valor’s PMs have the skill and experience to evaluate the importance of every product feature and the effort for its implementation. For sure, communication is the essence of their job, yet managers contribute to the project with technical advice and add to the team's self-sufficiency.`,
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/pm-benefits/tech_savvy.png'
    },
    {
      title: 'Day-to-day team supervision',
      description: 'Need a brief update regarding the project or a particular task? – Turn to your PM! This person has daily meetings with the team and knows every project detail. Also, through measuring team progress, PMs are always aware of possible bottlenecks and how to make things spin.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/pm-benefits/day_to_day.png'
    },
    {
      title: 'Solid project documentation',
      description: 'With proper docs, you can always check if the project requirements are fulfilled and track who and when added changes. PM will help you boost project traceability as he or she creates and constantly refreshes project materials.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/pm-benefits/solid_documentation.png'
    },
    {
      title: 'On track of change requests',
      description: 'It’s well-said that you should manage change unless it manages you. Valor’s PMs have their fingers on the pulse of change requests, adjusting the project scope and deliverables correspondingly. From now on, every change request is noted and processed.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/pm-benefits/track_changes.png'
    },
    {
      title: 'Risk mitigation',
      description: 'As your project progresses in an agile environment, every team member manages time and expectations to mitigate product delays. And the PM eliminates a chance of a large-scale failure through regular updates and sprint reviews.',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/pm-benefits/risk_mitigation.png'
    }
  ];

  traitsCard: ITraitsCard[] = [
    {
      title: 'Retention & stability',
      description: `Valor Software not just cares about clients’ satisfaction but fosters a friendly and discussion-oriented environment for employees. This makes the company a place where experts tend to work in the long run. So, you can obtain true knowledge-keepers for your project. To learn more about the company values and employment conditions, visit <a class="pointer-events-auto" href="/careers" target="_blank"><b><u>the employees-focused page</u></b></a>.`,
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/traits/retention_stability.png'
    },
    {
      title: 'Technical proficiency',
      description: `The company makes professional growth and training part of the culture to the extent that we even have hours for self-education added to the schedule. Keeping track of the latest industry trends and a constant skill-up lets our managers solve common issues in a more efficient way.`,
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/traits/technical_proficiency.png'
    },
    {
      title: 'Agility',
      description: 'Valor’s clients are located globally, so we make it easy for them to communicate with the team and keep track of the project changes no matter what time zone they are in. This agility is important because it allows us to go beyond initial requirements and build products that capture the market. Learn more about the benefits of Agile for your business from <a class="pointer-events-auto" href="/articles/benefits-of-agile-to-business-and-team" target="_blank"><b><u>the dedicated article on our blog.</u></b></a>',
      img: 'assets/img/bg-img/services_img/product-ownership-and-project-management/traits/agility.png'
    }
  ];


  poVerticalServiceCards: IVerticalServicesCard[] = [
    {
      title: 'Forms product vision',
      items: [
        { title: 'Desirable state of a product' },
        { title: 'Strategy for different audiences' },
        { title: 'Competitors’ analysis and killer features' }
      ]
    },
    {
      title: 'Sets product roadmap',
      items: [
        { title: 'Development direction' },
        { title: 'Goals and priorities for every team' },
        { title: 'Current project state with all the recent updates' }
      ]
    },
    {
      title: 'Sets sprint goals',
      items: [
        { title: 'User-focused' },
        { title: 'Plans and approves releases' },
        { title: 'Defines high-priority features' }
      ]
    },
    {
      title: 'Maintains product backlog',
      items: [
        { title: 'Customer advocate' },
        { title: 'keeps the backlog current' },
        { title: 'Manages stakeholders’ and market requirements' }
      ]
    },
  ];

  pmVerticalServiceCards: IVerticalServicesCard[] = [
    {
      title: 'Manages project scope',
      items: [
        { title: 'Defines scope' },
        { title: 'Manages project specifications' },
        { title: 'Allocates appropriate experts' }
      ]
    },
    {
      title: 'Controls quality and cost',
      items: [
        { title: 'Improves quality of delivery' },
        { title: 'Optimizes development cost' }
      ]
    },
    {
      title: 'Manages time and risks',
      items: [
        { title: 'Tracks risks and eliminates risks' },
        { title: 'helps manage the project through peak workloads' },
      ]
    },
    {
      title: 'Team leadership',
      items: [
        { title: 'Relieves you from team management' },
        { title: 'Maintains efficient teamwork' },
        { title: 'builds team spirit' }
      ]
    },
  ];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 40,
    loop: false,
    mousewheel: {
      releaseOnEdges: true
    },

    autoHeight: false,
    pagination: {
      clickable: true
    }
  };
  
  constructor(
    private modalService: ModalService<ContactModalComponent>
  ) {
  }

  openModal() {
    this.modalService.open(ContactModalComponent);
  }

}