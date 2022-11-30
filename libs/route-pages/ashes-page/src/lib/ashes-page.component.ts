import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { GetPortfolioService, IPortfolio, MappedTechnology, Technologies, titleRefactoring } from "@valor-software/common-docs";
import { Observable } from "rxjs";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ITechnologiesCard, technologiesAndServices } from '@valor-software/common-docs';

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
export class AshesPageComponent implements OnInit {
  changeBreadCrumbTitle?: { path: string, title: string }[] = [{ path: ROUTE, title: "Ashes of Creation" }];

  imageSliderButtonClasses = 'bg-yellow_bg_col color-black';

  project$: Observable<AshesPortfolio> = this.getProjectsServ.getPortfolioRequest(ROUTE);
  videoUrl: SafeResourceUrl = '';
  project?: AshesPortfolio;
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

  background: string[] = [
    "Intrepid Studios, authors of the most anticipated MMORPG – Ashes of Creation, inspire unity and bring people together through the game. Avoiding pay-to-win or cash grab elements, they simply create games the way people want them to be, with great respect and devotion to the community.",
    "<i>“I want to see the players dictate the direction of our story. I want to see the AoC world adapts and reacts to the player’s actions. Most importantly, I want to see a game built by gamers FOR gamers.”</i> – says Steven Sharif, the Creative Director of Ashes of Creation, describing what stands behind the idea of AoC.",
    "Ashes of Creation hasn’t just offered a beautiful fantasy world with over 100 locations but redefined the MMORPG genre giving the community the power to participate in the direction of the world's development and influence literally every aspect of the game. However the Ashes of Creation universe is more than just the game client, it also needs a great website for people to discover the game, dive deeper into the lore, meet the community and pick up the latest merch. This is the direction where Valor’s team had a big time of success."
  ];

  constructor(
    private getProjectsServ: GetPortfolioService,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.getProjectsServ.getPortfolioRequest(ROUTE).subscribe((project) => {
      this.project = project;
      this.videoUrl = this.getSafeUrl(this.project?.video);
    });
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
