import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { articlesList } from "../../apps/valor-software-site/src/assets/blog/articles.list";

function blogRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = articlesList.map((item: string) => {
        return {route: `/blog/${item}`};
    })
    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);