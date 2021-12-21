"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const portfolio_list_1 = require("../../apps/valor-software-site/src/assets/portfolio/portfolio.list");
function PortfolioRoutePlugin(route, config = {}) {
    const routes = portfolio_list_1.PortfolioList.map((item) => {
        return { route: `/portfolio/${item}` };
    });
    return Promise.resolve(routes);
}
const validator = async (conf) => [];
scully_1.registerPlugin('router', 'portfolioRoute', PortfolioRoutePlugin, validator);
//# sourceMappingURL=portfolio-route-plugin.js.map