import { Component } from "@angular/core";
import { Technologies } from "@valor-software/common-docs";

@Component({
  selector: "ashes-page",
  templateUrl: "./ashes-page.component.html"
})
export class AshesPageComponent {
  changeBreadCrumbTitle?: { path: string, title: string }[] = [{ path: "ashes", title: "Ashes of Creation" }];

  comparisons = [
    {
      beforeImg: 'assets/img/bg-img/ashes_page/login_old.png',
      afterImg: 'assets/img/bg-img/ashes_page/login_new.png'
    },
    {
      beforeImg: 'assets/img/bg-img/ashes_page/items_old.png',
      afterImg: 'assets/img/bg-img/ashes_page/items_new.png'
    },
    {
      beforeImg: 'assets/img/bg-img/ashes_page/checkout_old.png',
      afterImg: 'assets/img/bg-img/ashes_page/checkout_new.png'
    }
  ];


  technologies: Technologies[] = [
    Technologies.JavaScript,
    Technologies.Scully,
    Technologies.GAnalytics,
    Technologies.EcommerceMarketing,
    Technologies.Tailwind
  ];
  ssoTechnologies: Technologies[] = [
    Technologies.NodeJs,
    Technologies.Aws,
    Technologies.NestJs,
    Technologies.PostgreSql,
    Technologies.MongoDb,
    Technologies.Sentry,
    Technologies.AzurePlayFab,
  ];

  imageSliderButtonClasses = 'bg-yellow_bg_col color-black';

  automatedTechnologies: Technologies[] = [
    Technologies.Contentful,
    Technologies.Scully,
    Technologies.GithubActions
  ];

  feedback = {
    text: 'We’ve been working with Valor, and they have been doing some amazing stuff with the website. They have a great dedicated team of professionals who we have had an absolute pleasure working with to help support our platform needs. Those who might be in the enterprise business and need technical support and web development support, I would give a major shout-out to the Valor team. They’re doing a great job!',
    img: 'assets/img/feedback/ashes_of_creation.jpg',
    author: 'Steven Sharif',
    position: 'the Creative Director of Ashes of Creation'
  };
}