import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export { IPortfolio} from './portfolio.interface';
export { GetPortfolioService } from './getPortfolio.service';
export { ProjectsRouteService } from './projectsRoute.service';
export { PORTFOLIO_LIST } from './portfolioList.token';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
        