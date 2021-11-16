import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'top-menu',
    templateUrl: './top-menu.component.html'
})
export class TopMenuComponent {
    showClientsRoute = false;

    toggleClientsRoute(value?: boolean) {
        this.showClientsRoute = value !== undefined ? !!value : !this.showClientsRoute;
    }

}
