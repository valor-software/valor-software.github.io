// import { HandledRoute, registerPlugin } from "@scullyio/scully";
// import { articlesRefactoringTitlesList } from "../../assets/articles/articlesList";
// import { linksFromOldSite } from "../../assets/articles/brokenRoutes";

// function blogRoutePlugin(route: string, config = {}): Promise<HandledRoute[]> {
//     const oldLinks = Object.keys(linksFromOldSite);
//     const routes = [];
//     articlesRefactoringTitlesList.map((item: string) => {
//         routes.push({route: `/articles/${item}`});
//         routes.push({route: `/articles/${item}.html`});
//     });

//     oldLinks.map(item => {
//         routes.push({route: `/articles/${item}`});
//     })

//     return Promise.resolve(routes);
// }

// const validator = async (conf) => [];
// registerPlugin('router', 'blogRoute', blogRoutePlugin, validator);
