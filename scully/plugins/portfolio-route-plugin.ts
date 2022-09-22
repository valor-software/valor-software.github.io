import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { projectsList, scullyList } from "../../apps/valor-software-site/src/assets/portfolio/portfolio.list";
import { titleRefactoring } from "../utils/titleRefactoring";

function PortfolioRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = [];
    scullyList.map((item: string) => {
        let link = titleRefactoring(item);
        routes.push({route: `/projects/${link}`});
    });

    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'portfolioRoute', PortfolioRoutePlugin, validator);

