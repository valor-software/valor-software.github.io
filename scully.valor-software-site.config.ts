import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: "./apps/valor-software-site/src",
  projectName: "valor-software-site",
  outDir: './dist/valor-software-site',
  routes: {
  }
};