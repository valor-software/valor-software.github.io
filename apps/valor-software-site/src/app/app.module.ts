import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CommonDocsModule } from 'common-docs';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonDocsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
