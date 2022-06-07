import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({providedIn: 'platform'})
export class ProjectsRouteService {

    constructor(
        private router: Router
    ){}

    route(title: string) {
        let link = title;
        while(link.match(' '|| ':' || '–' || '—' || '&')) {
            link = link.replace(' ','_');
            link = link.replace(':','');
            link = link.replace('–','_');
            link = link.replace('—','_');
            link = link.replace('&','_');
            link = link.replace('\'','_');
        }
        this.router.navigate(['projects', link]);
    }
}
