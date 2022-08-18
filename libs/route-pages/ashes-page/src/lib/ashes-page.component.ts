import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { GetPortfolioService, IPortfolio, Technologies, titleRefactoring } from "@valor-software/common-docs";
import { Observable } from "rxjs";
import { DomSanitizer } from '@angular/platform-browser';

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
export class AshesPageComponent {
  changeBreadCrumbTitle?: { path: string, title: string }[] = [{ path: ROUTE, title: "Ashes of Creation" }];

  imageSliderButtonClasses = 'bg-yellow_bg_col color-black';

  project$: Observable<AshesPortfolio> = this.getProjectsServ.getPortfolioRequest(ROUTE);

  isFrameActive = false;

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
}
