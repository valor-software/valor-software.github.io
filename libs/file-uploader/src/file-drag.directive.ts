import {
    Directive,
    HostBinding,
    HostListener,
    Output,
    EventEmitter, ElementRef
} from "@angular/core";


@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: "[fileDrag]"
})
export class FileDragDirective {
    defaultBorder = 'border-dar_grey_font_col';
    pinkBorder = 'border-pink';
    @Output() files: EventEmitter<File[]> = new EventEmitter();

    // @HostBinding("style.background") private background = "#eee";

    constructor(private elementRef: ElementRef) { }

    @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.elementRef.nativeElement.classList.remove(this.defaultBorder);
        this.elementRef.nativeElement.classList.add(this.pinkBorder);
    }

    @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.elementRef.nativeElement.classList.remove(this.pinkBorder);
        this.elementRef.nativeElement.classList.add(this.defaultBorder);
        // this.background = "#eee";
    }

    @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.elementRef.nativeElement.classList.remove(this.pinkBorder);
        this.elementRef.nativeElement.classList.add(this.defaultBorder);
        // this.background = '#eee';

        const files: File[] = [];
        if (!evt?.dataTransfer?.files.length) {
            return;
        }

        for (const filesKey in evt.dataTransfer.files) {
            const file = evt.dataTransfer.files[filesKey];
            if (file.type) {
                files.push(file);
            }
        }

        if (files.length > 0) {
            this.files.emit(files);
        }
    }
}