import { ScullyConfig } from '@scullyio/scully';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';
import './scully/plugins/blog-route-plugin';
import './scully/plugins/portfolio-route-plugin';
import './scully/plugins/sitemap-plugin';

const Http404Plugin = getHttp404Plugin();

export const config: ScullyConfig = {
  projectRoot: "./apps/valor-software-site/src",
  projectName: "valor-software-site",
  outDir: './dist/valor-software-site',
  defaultPostRenderers: [Http404Plugin],
  routes: {
    '/articles/:id': {
      type: 'blogRoute',
    },
    '/projects/:id': {
      type: 'portfolioRoute',
    }
  }
};