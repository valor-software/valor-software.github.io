import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';
import { BuilderModule } from '@builder.io/angular';
import { BlogPageComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		BuilderModule.forRoot('4285878c370b42da9d91ea69156f4584'),
		RouterModule.forChild(routes)
	],
	declarations: [BlogPageComponent]
})
export class BlogPageModule {
	static routes: Routes = routes;
}
        