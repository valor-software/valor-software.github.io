import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export { PortfolioList, IPortfolio} from './portfolio.list';
export { GetPortfolioService } from './getPortfolio.service';
export { ProjectsRouteService } from './projectsRoute.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
        