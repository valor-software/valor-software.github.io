import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { projectsList } from "../../apps/valor-software-site/src/assets/portfolio/portfolio.list";
import { titleRefactoring } from "../utils/titleRefactoring";

function PortfolioRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = projectsList.map((item: string) => {
        let link = titleRefactoring(item);
        return {route: `/projects/${link}`};
    })
    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'portfolioRoute', PortfolioRoutePlugin, validator);

