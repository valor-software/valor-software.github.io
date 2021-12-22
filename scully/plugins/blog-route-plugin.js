"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const articles_list_1 = require("../../apps/valor-software-site/src/assets/blog/articles.list");
function blogRoutePlugin(route, config = {}) {
    const routes = articles_list_1.ArticlesList.map((item) => {
        return { route: `/blog/${item}` };
    });
    return Promise.resolve(routes);
}
const validator = async (conf) => [];
scully_1.registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);
//# sourceMappingURL=blog-route-plugin.js.map