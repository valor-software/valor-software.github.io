import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CommonDocsModule } from '@valor-software/common-docs';
import { TestComponent } from "./test.component";

@NgModule({
  declarations: [
      AppComponent,
      TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CommonDocsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
