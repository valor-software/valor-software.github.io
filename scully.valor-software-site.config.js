"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/** this loads the default render plugin, remove when switching to something else. */
require("@scullyio/scully-plugin-puppeteer");
require("./scully/plugins/blog-route-plugin");
require("./scully/plugins/portfolio-route-plugin");
exports.config = {
    projectRoot: "./apps/valor-software-site/src",
    projectName: "valor-software-site",
    outDir: './dist/valor-software-site',
    routes: {
        '/articles/:id': {
            type: 'blogRoute',
        },
        '/projects/:id': {
            type: 'portfolioRoute',
        }
    }
};
