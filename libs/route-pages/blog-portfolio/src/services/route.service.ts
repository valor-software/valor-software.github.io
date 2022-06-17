import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({providedIn: 'platform'})
export class BlogPortfolioRouteService {

    constructor(
        private router: Router
    ) {}

    route(title: string, isBlogPage: boolean) {
        this.router.navigate([isBlogPage ? 'blog' : 'portfolio', this.getRefactoredLink(title)]);
    }

    getRouteLink(title: string): string {
        return this.getRefactoredLink(title);
    }

    getRefactoredLink(title: string): string {
        let link = title;
        while (link.match(' ' || ':' || '–' || '—' || '&')) {
            link = link.replace(' ', '_');
            link = link.replace(':', '');
            link = link.replace('–', '_');
            link = link.replace('—', '_');
            link = link.replace('&', '_');
        }

        return link;
    }
}
