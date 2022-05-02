import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({providedIn: 'platform'})
export class BlogPortfolioRouteService {

    constructor(
        private router: Router
    ){}

    route(title: string, isBlogPage: boolean) {
        let link = title;
        while(link.match(' '|| ':' || '–' || '—' || '&')) {
            link = link.replace(' ','_');
            link = link.replace(':','');
            link = link.replace('–','_');
            link = link.replace('—','_');
            link = link.replace('&','_');
            link = link.replace('\'','_');
        }

        this.router.navigate([isBlogPage ? 'blog' : 'portfolio', link]);
    }
}