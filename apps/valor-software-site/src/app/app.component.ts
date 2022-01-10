import {AfterContentInit, Component} from '@angular/core';
import {SeoService} from "@valor-software/common-docs";

@Component({
  selector: 'valor-software-site-base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit{
  title = 'valor-software-site';

  constructor(
      private seo: SeoService
  ) {
  }


  ngAfterContentInit() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
