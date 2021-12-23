import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { portfolioList } from "../../apps/valor-software-site/src/assets/portfolio/portfolio.list";

function PortfolioRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = portfolioList.map((item: string) => {
        return {route: `/portfolio/${item}`};
    })
    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'portfolioRoute', PortfolioRoutePlugin, validator);