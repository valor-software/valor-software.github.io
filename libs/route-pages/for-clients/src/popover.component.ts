import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'popover',
    template: `
        <div
        [class.popover-left] = "position === 'left'"
        [class.popover-top] = "position === 'top'"
        [class.popover-right] = "position === 'right'"
        [class.popover-bottom] = "position === 'bottom'"
        >
            <div
                    [class.block]="_open"
                    [class.hidden]="!_open"
                    class="popover-container"
            >
                <div class="arrow"
                    [class.right-center]="arrowPosition === 'right center'"
                    [class.top-left]="arrowPosition === 'top left'"
                    [class.left-bottom]="arrowPosition === 'left bottom'"
                ></div>
                <div>
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
        <div class="backdrop" [class.backdrop_show]="_open" (click)="closePopover()"></div>
    `
})
export class PopoverComponent {
    _open = false;
    @Input() parentId?: string;
    @Input() position: 'top' | 'left' | 'right' | 'bottom' = 'top'; 
    @Input() arrowPosition: 'right center' | 'top left' | 'left bottom' = 'right center'; 
    @Input() addArrow = true;
    @Input() set open(value: boolean) {
        this._open = value;
    }

    @Output() popoverClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    closePopover() {
        this._open = false;
        this.popoverClosed.emit();
    }
}
