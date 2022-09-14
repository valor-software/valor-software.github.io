import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { projectsList } from "../../apps/valor-software-site/src/assets/portfolio/portfolio.list";
import { titleRefactoring } from "../utils/titleRefactoring";

function PortfolioRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = [];
    projectsList.map((item: string) => {
        let link = titleRefactoring(item);
        routes.push({route: `/projects/${link}`});
        // routes.push({route: `/projects/${link}.html`});
    });

    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'portfolioRoute', PortfolioRoutePlugin, validator);

