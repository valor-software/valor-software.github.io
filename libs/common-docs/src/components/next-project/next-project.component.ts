

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'img-comparison-slider';
import { GetPortfolioService, IPortfolio, titleRefactoring } from '../../common-docs.module';

export interface IComparisonSlider {
  beforeImg: string;
  afterImg: string;
  beforeText?: string;
  afterText?: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'next-project',
  templateUrl: './next-project.component.html'
})
export class NextProjectComponent {
  nextProject?: IPortfolio;

  constructor(private getProjectsServ: GetPortfolioService,
    private router: Router,
  ) {
    this.initNextProject();
  }

  getRouteLink(link: string): string {
    return titleRefactoring(link);
  }

  initNextProject() {
    let index = this.getProjectsServ.getTitleIndex(this.router.parseUrl(this.router.url).root.children.primary.segments[1].path);
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
}