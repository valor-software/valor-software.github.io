import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { GetPortfolioService, IPortfolio, MappedTechnology, Technologies, titleRefactoring } from "@valor-software/common-docs";
import { Observable } from "rxjs";
import { DomSanitizer } from '@angular/platform-browser';
import { ITechnologiesCard } from '../../../../common-docs/src/components/techonlogies-card/technologies-card.component';
import { technologiesAndServices } from '../../../../common-docs/src/components/technologies/technologies-and-services';

const ROUTE = 'ashes-of-creation';

interface Deliverable {
  text: string
  descriptions: string[]
  technologies: Technologies[]
  impact: string[]
  comparisons: { beforeImg: string, afterImg: string }[]
  bgImg: string
  centerButton?: { text: string, link: string }
  descriptionCards?: string[]
  subDescription?: string
}

interface Feedback {
  text: string
  img: string
  author: string
  position: string
}

type AshesPortfolio = IPortfolio & {
  deliverables: Deliverable[],
  feedback: Feedback
  background: string[]
  challenge: string[]
};

@Component({
  selector: "ashes-page",
  templateUrl: "./ashes-page.component.html"
})
export class AshesPageComponent {
  changeBreadCrumbTitle?: { path: string, title: string }[] = [{ path: ROUTE, title: "Ashes of Creation" }];

  imageSliderButtonClasses = 'bg-yellow_bg_col color-black';

  project$: Observable<AshesPortfolio> = this.getProjectsServ.getPortfolioRequest(ROUTE);

  isFrameActive = false;

  technologiesCard: ITechnologiesCard[] = [
    {
      smJustify: "between",
      lgJustify: "start",
      technologies: [
        {
          title: "Node.js",
          src: "assets/img/technologies/active/node.png"
        },
        {
          title: "AWS",
          src: "assets/img/technologies/others/aws_white.png"
        },
        {
          title: "Nest.js",
          src: "assets/img/technologies/active/nest_js.png"
        },
        {
          title: "PostgresSQL",
          src: "assets/img/technologies/active/postgresql.png"
        },
        {
          title: "Sentry",
          src: "assets/img/technologies/others/mongodb_white.png"
        },
        {
          title: "MongoDB",
          src: "assets/img/technologies/others/sentry_white.png"
        },
        {
          title: "MS Azure PlayFab",
          src: "assets/img/technologies/active/lang.png"
        }
      ]
    }
  ];

  constructor(
    private getProjectsServ: GetPortfolioService,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
  }

  getRouteLink(link: string): string {
    return titleRefactoring(link);
  }

  getRespSrc(link: string): string {
    const arr = link.split('.');
    return `${arr[0]}_resp.${arr[1]}`;
  }

  changeSrc(event: Event, link: string) {
    (event.target as HTMLImageElement).src = link;
    this.cdr.detectChanges();
  }

  activateFrame() {
    // start from inactive iframe to allow scrolling over iframe
    if (!this.isFrameActive) {
      this.isFrameActive = true;
    }
  }

  getSafeUrl(url?: string) {
    if (!url) {
      return '';
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getTechnologyList(technologyNames: Technologies[]): ITechnologiesCard[] {
    const MappedTechnology = technologyNames.map(t => technologiesAndServices[t]);
    const technologiesCard: ITechnologiesCard[] = [
      {
        smJustify: "between",
        lgJustify: "start",
        technologies: MappedTechnology.map(technology => {

          return {
            title: technology.title,
            src: this.getLogoUrl(technology)
          };
        })
      }
    ];

    return technologiesCard;
  }

  getLogoUrl(mappedTechnology: MappedTechnology): string {
    let logo = mappedTechnology.activeImg;

    if (
      mappedTechnology.title === 'AWS' ||
      mappedTechnology.title === 'MongoDB' ||
      mappedTechnology.title === 'Sentry'
    ) {
      const iconName = mappedTechnology.activeImg.substring(mappedTechnology.activeImg.lastIndexOf('/') + 1, mappedTechnology.activeImg.lastIndexOf('.'));
      logo = logo.replace('active', 'others').replace(`${iconName}`, `${iconName}_white`);
    }

    return logo;
  }
}
