import { Component } from '@angular/core';
import { ITechnologiesCard } from '@valor-software/common-docs';
import SwiperCore, { Pagination } from "swiper";
import { IServicesHeader } from '../../components/service-header-card/service-header-card.component';
import { ITraitsCard } from '../../components/traits-cards/traits-cards.component';
import { IVerticalServicesCard } from '../../components/vertical-services-card/vertical-services-card.component';


SwiperCore.use([Pagination]);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'devops',
  templateUrl: './devops.component.html'
})
export class DevOpsComponent {


  servicesHeader: IServicesHeader = {
    title: 'DevOps',
    descriptions: ['As the development world is getting even more agile, organizations need to follow to keep pace with the users’ expectations and needs. Valor Software will help you satisfy your audience’s insatiable desire for the newest features and get a competitive advantage with digital transformation.'],
    img: 'assets/img/bg-img/services_img/services_4.svg',
    button: {
      title: 'Get a free session with an expert'
    },
    bradCrumb: {
      path: 'devops',
      title: 'DevOps'
    }
  };

  benefitsCards: ITraitsCard[] = [
    {
      title: 'Faster deployment',
      description: 'Automation releases the bottleneck between the dev and the operations team. Tests are running continuously and streamline the deployment.',
      img: 'assets/img/bg-img/services_img/devops/benefits/faster-deploy.png'
    },
    {
      title: 'Shorter time to market',
      description: 'DevOps improves team productivity and the overall feature quality, so you ship new functionality faster.',
      img: 'assets/img/bg-img/services_img/devops/benefits/shorter-time.png'
    },
    {
      title: 'Reduced human errors',
      description: 'Through automation, you ensure higher consistency of the development process and minimize human errors in repetitive actions.',
      img: 'assets/img/bg-img/services_img/devops/benefits/reduced-errors.png'
    },
    {
      title: 'Agile user-centric approach',
      description: 'With continuous product improvement and shortened feedback loops, you respond immediately and increase end-user satisfaction.',
      img: 'assets/img/bg-img/services_img/devops/benefits/agile-approach.png'
    },
    {
      title: 'Reduced cost',
      description: 'Through the automation of manual efforts, integration of the cloud, and failure decrease, you lower operations cost and save more money!',
      img: 'assets/img/bg-img/services_img/devops/benefits/reduced-cost.png'
    },

  ];

  toolsCards: ITechnologiesCard[] = [
    {
      title: 'CI/CD',
      smJustify: 'evenly',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/travis_ci.png',
          tooltip: 'Travis CI'
        },
        {
          src: 'assets/img/technologies/others/actions.png',
          tooltip: 'GitHub Actions'
        }
      ]
    },
    {
      title: 'Cloud Services',
      smJustify: 'evenly',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/active/google_cloud.png',
          tooltip: 'Google Cloud'
        },
        {
          src: 'assets/img/technologies/active/aws.png',
          tooltip: 'AWS'
        },
        {
          src: 'assets/img/technologies/active/firebase.png',
          tooltip: 'Firebase'
        },
        {
          src: 'assets/img/technologies/active/heroku.png',
          tooltip: 'Heroku'
        }
      ]
    },
    {
      title: 'Infrastructure',
      smJustify: 'evenly',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/terraform.png',
          tooltip: 'Terraform'
        }
      ]
    },
    {
      title: 'Microservices',
      smJustify: 'evenly',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/docker.png',
          tooltip: 'Docker'
        },
        {
          src: 'assets/img/technologies/others/kubernetes.png',
          tooltip: 'Kubernetes'
        }
      ]
    },
    {
      title: 'Monitoring',
      smJustify: 'evenly',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/sentry.png',
          tooltip: 'Sentry'
        },
        {
          src: 'assets/img/technologies/others/data_dog.png',
          tooltip: 'Datadog'
        },
        {
          src: 'assets/img/technologies/others/stackdriver.png',
          tooltip: 'Stackdriver'
        }
      ]
    },
    {
      title: 'Security',
      smJustify: 'evenly',
      lgJustify: 'start',
      technologies: [
        {
          src: 'assets/img/technologies/others/cloudflare.png',
          tooltip: 'Cloudflare'
        }
      ]
    },
  ];

  verticalServiceCards: IVerticalServicesCard[] = [
    {
      title: 'Continuous Integration & Delivery (CI/CD)',
      description: 'Integrate the efforts of the dev and operations departments into one cohesive environment for much more regular and quality releases.',
      items: [
        { title: 'Focus on the development of new features with automated orchestration and deployment' },
        { title: 'Get early feedback and elevate risks for end-users with a continuous testing pipeline and more accurate tests' },
        { title: 'Ensure your software behaves just like expected on production with unified app configuration across environments' }
      ],
      img: 'assets/img/bg-img/services_img/devops/vertical/ci-cd.png',
      button: { title: 'Get started' }
    },
    {
      title: 'Cloud Adoption',
      description: 'Valor’s engineers have vast experience working with the cloud and integrating cloud services. Let us increase the reliability of your product and give it endless perspectives to scale.',
      items: [
        { title: 'Go global in a few clicks' },
        { title: 'Reduce operational costs as you pay only when you consume computing resources' },
        { title: 'Increase the security of your products with the combination of cutting-edge cloud services and DevOps' }
      ],
      img: 'assets/img/bg-img/services_img/devops/vertical/cloud.png',
      button: { title: 'Get your cloud adoption plan' }
    },
    {
      title: 'Infrastructure as a Code (IaC)',
      description: 'We will help your organization to migrate and recover applications seamlessly. With the incorporation of IaC, you can spin up the authoritative version of the solution in no time as all the infrastructure assets are stored in one doc.',
      items: [
        { title: 'Get ready for a smooth transition to cloud' },
        { title: 'Enable quick recovery of applications' },
        { title: 'Accelerate builds of apps and servers' }
      ],
      img: 'assets/img/bg-img/services_img/devops/vertical/iac.png',
      button: { title: 'Run an infrastructure health check' }
    },
    {
      title: 'Microservices Architecture',
      description: 'As you break the monolith into services, you reduce the number of code dependencies and give more freedom to the team. Now they can tackle each service pointwise and deliver updates faster with no threat to system integrity.',
      items: [
        { title: 'Increase deployability and shorten deployment time' },
        { title: 'Reach for higher software testability' },
        { title: 'Enjoy improved fault isolation' }
      ],
      img: 'assets/img/bg-img/services_img/devops/vertical/microservices.png',
      button: { title: 'Get started' }
    },
    {
      title: 'Monitoring & Security',
      description: 'Alongside the automation of test and deployment, we boost the security and reliability of your service with the DevOps means for ongoing fraud and failure detection.',
      items: [
        { title: 'Protect your external-facing resources from DDoS attacks' },
        { title: 'Reduce time to detect and recover from failures' },
        { title: 'Run current system status check upon request' }
      ],
      img: 'assets/img/bg-img/services_img/devops/vertical/monitoring.png',
      button: { title: 'Get started' }
    }
  ];

  traitsCards: ITraitsCard[] = [
    {
      title: 'Business Value',
      description: `We take a custom approach to each client and company we partner up with because no two businesses are the same. We'll offer you a DevOps strategy that will anticipate your particular business needs and allow for a genuine and measurable boost of your users' satisfaction.`,
      img: 'assets/img/bg-img/services_img/devops/traits/business_value.png'
    },
    {
      title: 'Strategy & Innovation',
      description: `Valor’s culture of personal growth and self-improvement drives engineers to constantly sharpen their skills and master <a href="/articles/medusa-the-only-commercial-available-saas-platform-for-federated-applications" target="_blank"><b><u>innovative tools and technologies</u></b></a>. We’ll provide you with a forward-looking DevOps solution that will not just optimize your today's processes but will enable your consistent growth and competitive advantage.`,
      img: 'assets/img/bg-img/services_img/devops/traits/strategy_innovation.png'
    },
    {
      title: 'Full-cycle Service',
      description: 'We go beyond a standard set of requirements and specifications – to us partnership is about being a trusted software consultant that can address clients’ needs at every stage of their journey. So rather than implementing a particular task, we deploy, <a href="/services/support-&-Maintenance" target="_blank"><b><u>support, and maintain</u></b></a> your project in a reliable environment powered by DevOps.',
      img: 'assets/img/bg-img/services_img/devops/traits/full_cycle.png'
    }
  ];

}