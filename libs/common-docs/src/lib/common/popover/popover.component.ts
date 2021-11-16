import { Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'menu-popover',
    templateUrl: './popover.component.html'
})
export class PopoverComponent {
    @Input() show = false;
}
