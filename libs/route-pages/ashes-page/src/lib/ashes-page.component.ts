import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { GetPortfolioService, IPortfolio, Technologies, titleRefactoring } from "@valor-software/common-docs";
import { Observable } from "rxjs";

const ROUTE = 'ashes-of-creation';

interface Deliverable {
  text: string
  description: string
  technologies: Technologies[]
  impact: string[]
  comparisons: { beforeImg: string, afterImg: string }[]
  bgImg: string
  centerButton?: { text: string, link: string }
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
  nextProject?: IPortfolio;

  constructor(
    private getProjectsServ: GetPortfolioService,
    private cdr: ChangeDetectorRef
    ) {
  }

  public ngOnInit() {
    this.initNextProject();
  }

  initNextProject() {
    let index = this.getProjectsServ.getTitleIndex(ROUTE);
    if (!index && index !== 0) {
      return;
    }

    const refactoredTitles = this.getProjectsServ.getRefactoredList() || [];
    const projectList = [...refactoredTitles].reverse();
    if (!projectList || !projectList.length) {
      return;
    }

    if (index === projectList.length) {
      index = 0;
    }

    if (!projectList[index]) {
      return;
    }

    this.getProjectsServ.getPortfolioRequest(projectList[index]).subscribe(res => {
      this.nextProject = res;
    });
  }

  getRouteLink(link: string): string {
    return titleRefactoring(link);
  }

  getRespSrc(link: string): string {
    const arr = link.split('.');
    return `${arr[0]}_resp.${arr[1]}`;
  }

  changeSrc(event: Event, link:string) {
    (event.target as HTMLImageElement).src = link;
    this.cdr.detectChanges();
  }
}