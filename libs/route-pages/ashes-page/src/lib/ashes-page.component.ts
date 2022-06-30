import { Component } from "@angular/core";
import { Technologies } from "@valor-software/common-docs";

@Component({
  selector: "ashes-page",
  templateUrl: "./ashes-page.component.html"
})
export class AshesPageComponent {
  changeBreadCrumbTitle?: { path: string, title: string }[] = [{ path: "ashes", title: "Ashes of Creation" }];
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

  automatedTechnologies: Technologies[] = [
    Technologies.Contentful,
    Technologies.Scully,
    Technologies.GithubActions
  ];
}