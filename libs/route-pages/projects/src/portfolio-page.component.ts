import { Component } from '@angular/core';
import {GetPortfolioService, IPortfolio, ProjectsRouteService} from "@valor-software/portfolio";
import {forkJoin, Subscription} from "rxjs";
import {IArticle} from "@valor-software/common-docs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'portfolio',
    templateUrl: 'portfolio-page.component.html'
})
export class PortfolioPageComponent {
    projects?: IPortfolio[];
    $portfolio?: Subscription;
    firstProjects?: IPortfolio[];
    projectsAmount = 4;
    activeProject?: IPortfolio;

    constructor(
        private getPortfolio: GetPortfolioService,
        private routeProjectServ: ProjectsRouteService,
    ) {
        this.$portfolio = forkJoin(this.getPortfolio.getFullListOfPortfolio()).subscribe((res: IPortfolio[] | undefined) => {
            if (res) {
                this.projects = Object.assign(res);
                this.firstProjects = this.getFirstProjects(res);
                this.activeProject = this.firstProjects[0];
            }
        });
    }

    getFirstProjects(value: IPortfolio[]) {
        return value.slice(0,4);
    }

    route(title: string) {
        this.routeProjectServ.route(title);
    }

}