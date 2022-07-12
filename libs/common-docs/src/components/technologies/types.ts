import { technologiesAndServices } from "./technologies-and-services";

type TechnologiesList = typeof technologiesAndServices;

export enum Technologies {
  Angular = "angular",
  React = "react",
  ReactNative = "react_native",
  Ruby = "ruby",
  Vue = "vue",
  NodeJs = "node_js",
  NestJs = "nest_js",
  JavaScript = 'javascript',
  Python = "python",
  Go = "go",
  Ionic = "ionic",
  NativeScript = "native_script",
  Google = "google",
  Firebase = "firebase",
  Heroku = "heroku",
  Aws = "aws",
  AzurePlayFab = "azure_play_fab",
  Scully = 'scully',
  GAnalytics = 'g_analytics',
  EcommerceMarketing = 'ecommerce_marketing',
  Tailwind = 'tailwind',
  PostgreSql = 'postgre_sql',
  MongoDb = 'mongo_db',
  Sentry = 'sentry',
  Contentful = 'contentful',
  GithubActions = 'github_actions',
}

export type MappedTechnology = TechnologiesList[keyof TechnologiesList];