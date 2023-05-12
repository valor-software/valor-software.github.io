import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';
import { NestjsRspackCicdPerformanceComponent, RsPackRustBasedWebBundlerComponent } from './pages';
import { QuoteComponent, PersonComponent, CompanyComponent } from './components';

@NgModule({
	declarations: [
		RsPackRustBasedWebBundlerComponent,
		QuoteComponent,
		PersonComponent,
		CompanyComponent,
		NestjsRspackCicdPerformanceComponent,
	],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PressReleaseModule {
	static routes: Routes = routes;
}
