import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { ArticlesList } from "../../apps/valor-software-site/src/assets/blog/articles.list";

function blogRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = ArticlesList.map((item: string) => {
        console.log(item);
        return {route: `/blog/${item}`};
    })
    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);