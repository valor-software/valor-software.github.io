import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CommonDocsModule } from '@valor-software/common-docs';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CommonDocsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
