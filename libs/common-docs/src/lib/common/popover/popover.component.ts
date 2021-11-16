import { Component, Inject, Input } from '@angular/core';
import { POPOVER_STRUCTURE } from "../tokens/popoverModel.token";
import { PopoverStructureType } from "../models/popover.model";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'menu-popover',
    templateUrl: './popover.component.html'
})
export class PopoverComponent {
    @Input() show = false;
    popover_str?: PopoverStructureType;
    constructor(
        @Inject(POPOVER_STRUCTURE) pop_str: PopoverStructureType
    ) {
        this.popover_str = pop_str;
    }
}
