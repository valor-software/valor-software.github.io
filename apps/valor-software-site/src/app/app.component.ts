import { AfterContentInit, Component, Inject } from '@angular/core';
import { SeoService } from "@valor-software/common-docs";
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'valor-software-site-base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit{
  title = 'valor-software-site';

  constructor(
      private seo: SeoService,
      private router: Router,
      @Inject(DOCUMENT) private document: any
  ) {}

  ngAfterContentInit() {
    this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd)
        )
        .subscribe(() => setTimeout(() => {
          const hash = this.router.parseUrl(this.router.url).fragment;
          if (hash) {
            //todo logic for router with fragment
          } else {
            window.scrollTo(0,0);
          }
        }, 50));
  }
}
