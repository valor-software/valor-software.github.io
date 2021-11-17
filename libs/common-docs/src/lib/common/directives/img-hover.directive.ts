import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive(
    // eslint-disable-next-line @angular-eslint/directive-selector
    {selector: '[changeSrcOnHover]'}
)
export class ImgHoverDirective {
    @HostListener('mouseout')
    onMouseLeave() {
        const src = this.elementRef.nativeElement.getElementsByTagName('img')[0].getAttribute('src').split('_active').join('');
        this.elementRef.nativeElement.getElementsByTagName('img')[0].setAttribute('src', src);
    }

    @HostListener('mouseover')
    onMouseOut() {
        const src = this.elementRef.nativeElement.getElementsByTagName('img')[0].getAttribute('src').split('.');
        const resSrc = `${src[0]}_active.${src[1]}`;
        this.elementRef.nativeElement.getElementsByTagName('img')[0].setAttribute('src', resSrc);
    }

    constructor(private elementRef: ElementRef) {}


}
