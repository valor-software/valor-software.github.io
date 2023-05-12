import { NestjsRspackCicdPerformance, RsPackRustBasedWebBundlerComponent } from './pages';

// ToDo refactor routing
export const routes = [
	{
		path: 'rs-pack-rust-based-web-bundler',
		component: RsPackRustBasedWebBundlerComponent
	},
	{
		path: 'nestjs-rspack-cicd-performance',
		component: NestjsRspackCicdPerformance
	}
];

