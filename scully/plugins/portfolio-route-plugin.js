"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const portfolio_list_1 = require("../../apps/valor-software-site/src/assets/portfolio/portfolio.list");
const titleRefactoring_1 = require("../utils/titleRefactoring");
function PortfolioRoutePlugin(route, config = {}) {
    const routes = portfolio_list_1.projectsList.map((item) => {
        let link = titleRefactoring_1.titleRefactoring(item);
        return { route: `/projects/${link}` };
    });
    return Promise.resolve(routes);
}
const validator = async (conf) => [];
scully_1.registerPlugin('router', 'portfolioRoute', PortfolioRoutePlugin, validator);
//# sourceMappingURL=portfolio-route-plugin.js.map