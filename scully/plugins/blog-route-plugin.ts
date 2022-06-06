import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { articleIdList } from "../../apps/valor-software-site/src/assets/blog/articles.list";

function blogRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = articleIdList.map((item: string, index) => {
        return {route: `/articles/${index +1}`};
    })
    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);