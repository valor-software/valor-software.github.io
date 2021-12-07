import { Component, Input } from '@angular/core';
import { ServicesList } from "./services.model";
import { Router } from "@angular/router";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'services-block',
    templateUrl: './services-block.component.html'
})
export class ServicesBlockComponent {
    @Input() preview?: boolean;
    servicesList: typeof ServicesList = ServicesList;

    constructor(
        private router: Router
    ) {}

    routeLink(link: string) {
        this.router.navigate([`/${link}`]);
    }
}