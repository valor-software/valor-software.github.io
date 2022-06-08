"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const articles_list_1 = require("../../apps/valor-software-site/src/assets/blog/articles.list");
const titleRefactoring_1 = require("../utils/titleRefactoring");
const brokenRoutes_1 = require("../../apps/valor-software-site/src/assets/blog/brokenRoutes");
function blogRoutePlugin(route, config = {}) {
    const oldLinks = Object.keys(brokenRoutes_1.linksFromOldSite);
    const routes = [];
    articles_list_1.articleIdList.map((item) => {
        let link = titleRefactoring_1.titleRefactoring(item);
        routes.push({ route: `/articles/${link}` });
        routes.push({ route: `/articles/${link}.html` });
    });
    oldLinks.map(item => {
        routes.push({ route: `/articles/${item}` });
    });
    return Promise.resolve(routes);
}
const validator = async (conf) => [];
scully_1.registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);
//# sourceMappingURL=blog-route-plugin.js.map