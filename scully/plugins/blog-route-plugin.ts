import { HandledRoute, registerPlugin } from "@scullyio/scully";
import { articleIdList } from "../../apps/valor-software-site/src/assets/blog/articles.list";
import { titleRefactoring } from "../utils/titleRefactoring";

function blogRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
    const routes = articleIdList.map((item: string, index) => {
        let link = titleRefactoring(item);
        return {route: `/articles/${link}`};
    })
    return Promise.resolve(routes);
}

const validator = async (conf) => [];
registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);
