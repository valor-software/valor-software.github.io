import { Component, EventEmitter, Input, Output } from '@angular/core';
import { popoverStructure, PopoverStructureType } from "../../models/popover.model";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'menu-popover',
    templateUrl: './popover.component.html'
})
export class PopoverComponent {
    @Input() show = false;
    @Output() changeShowClientRoute: EventEmitter<boolean> = new EventEmitter<boolean>();
    popover_str: PopoverStructureType = popoverStructure;

    changeShow(value?: boolean) {
        if (value !== undefined) {
            this.changeShowClientRoute.emit(value);
        }
    }
}
