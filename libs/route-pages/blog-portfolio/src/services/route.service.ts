import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { titleRefactoring } from "../utils/titleRefactoring";

@Injectable({providedIn: 'platform'})
export class BlogPortfolioRouteService {

    constructor(
        private router: Router
    ){}

    route(title: string, isBlogPage: boolean) {
        let link = titleRefactoring(title);
        this.router.navigate([isBlogPage ? 'blog' : 'portfolio', link]);
    }
}