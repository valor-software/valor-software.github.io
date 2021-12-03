import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive(
    // eslint-disable-next-line @angular-eslint/directive-selector
    {selector: '[changeSrcOnHover]'}
)
export class ImgHoverDirective {
    @Input() activeSrc = '';
    @Input() defaultSrc = '';
    @Input() check?: boolean;

    @HostListener('mouseout')
    onMouseLeave() {
        if (!this.defaultSrc || this.check) {
            return;
        };

        this.elementRef.nativeElement.getElementsByTagName('img')[0].setAttribute('src', this.defaultSrc);
    }

    @HostListener('mouseover')
    onMouseOver() {
        if (!this.activeSrc || this.check) {
            return;
        };

        this.elementRef.nativeElement.getElementsByTagName('img')[0].setAttribute('src', this.activeSrc);
    }

    constructor(private elementRef: ElementRef) {}
}
