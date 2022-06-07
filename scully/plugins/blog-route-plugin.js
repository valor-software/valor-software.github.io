"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const articles_list_1 = require("../../apps/valor-software-site/src/assets/blog/articles.list");
const titleRefactoring_1 = require("../utils/titleRefactoring");
function blogRoutePlugin(route, config = {}) {
    const routes = articles_list_1.articleIdList.map((item, index) => {
        let link = titleRefactoring_1.titleRefactoring(item);
        return { route: `/articles/${link}` };
    });
    return Promise.resolve(routes);
}
const validator = async (conf) => [];
scully_1.registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);
//# sourceMappingURL=blog-route-plugin.js.map