import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { scullyList } from "../../assets/articles/scullyList";
import { linksFromOldSite } from "../../assets/articles/brokenRoutes";

function blogRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const oldLinks = Object.keys(linksFromOldSite);
    const routes = [];
    scullyList.map((item: string) => {
        routes.push({route: `/articles/${item}`});
    });

    oldLinks.map(item => {
        routes.push({route: `/articles/${item}`});
    })

    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);
