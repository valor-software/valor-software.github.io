import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { articleIdList } from "../../apps/valor-software-site/src/assets/blog/articles.list";
import { titleRefactoring } from "../utils/titleRefactoring";
import { linksFromOldSite } from "../../apps/valor-software-site/src/assets/blog/brokenRoutes";

function blogRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const oldLinks = Object.keys(linksFromOldSite);
    const routes = [];
    articleIdList.map((item: string) => {
        let link = titleRefactoring(item);
        routes.push({route: `/articles/${link}`});
        routes.push({route: `/articles/${link}.html`});
    });

    oldLinks.map(item => {
        routes.push({route: `/articles/${item}`});
    })

    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);
