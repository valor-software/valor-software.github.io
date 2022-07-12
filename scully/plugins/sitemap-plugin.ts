import { setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
    urlPrefix: 'https://valor-software.com/',
    sitemapFilename: 'sitemap.xml',
    changeFreq: 'monthly',
    priority: [
        '1.0',
        '0.9',
        '0.8',
        '0.7',
        '0.6',
        '0.5',
        '0.4',
        '0.3',
        '0.2',
        '0.1',
        '0.0',
    ],
    ignoredRoutes: ['/404'],
    routes: {
        '/articles/:id': {
            changeFreq: 'daily',
            priority: '0.9',
            sitemapFilename: 'sitemap-articles.xml',
        },
        '/projects/:id': {
            changeFreq: 'daily',
            priority: '0.9',
            sitemapFilename: 'sitemap-projects.xml',
        }
    },
});