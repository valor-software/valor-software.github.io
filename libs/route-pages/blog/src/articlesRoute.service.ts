import { Injectable } from '@angular/core';
import { Router } from "@angular/router";



@Injectable({providedIn: 'platform'})
export class ArticlesRouteService {

    constructor(
        private router: Router
    ){}

    route(title: string) {
        // let link = title;
        let link = 'Case study of Applitools or not only Cypress cross-browser testing';
        while(link.match(' '|| ':' || '–' || '—')) {
            link = link.replace(' ','_');
            link = link.replace(':','');
            link = link.replace('–','_');
            link = link.replace('—','_');
        }
        // this.router.navigate(['blog', link]);
        console.log(link);
    }
}