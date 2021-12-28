import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'popover',
    template: `
        <div 
                [class.block]="_open" 
                [class.hidden]="!_open"
                [class.popover-top]="position === 'top'"
                [class.popover-left]="position === 'left'"
                [class.popover-right]="position === 'right'"
                [class.popover-bottom]="position === 'bottom'"
                class="popover-container"
        >
            <div class="arrow"></div>
            <div>
                <ng-content></ng-content>
            </div>
        </div>
        <div class="backdrop" [class.backdrop_show]="_open" (click)="closePopover()"></div>
    `
})
export class PopoverComponent {
    _open = false;
    @Input() parentId?: string;
    @Input() position: 'top' | 'left' | 'right' | 'bottom' = 'top';
    @Input() addArrow = true;
    @Input() set open(value: boolean) {
        this._open = value;
    }

    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

    closePopover() {
        this._open = false;
        this.close.emit();
    }
}
