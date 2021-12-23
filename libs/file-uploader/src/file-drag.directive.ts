import {
    Directive,
    HostListener,
    Output,
    EventEmitter, ElementRef, Input
} from "@angular/core";


@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: "[fileDrag]"
})
export class FileDragDirective {
    defaultBorder = 'border-dar_grey_font_col';
    pinkBorder = 'border-pink';
    @Input() acceptedFiles?: string[];
    @Output() files: EventEmitter<File[]> = new EventEmitter();

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
    }

    @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.elementRef.nativeElement.classList.remove(this.pinkBorder);
        this.elementRef.nativeElement.classList.add(this.defaultBorder);

        const files: File[] = [];
        if (!evt?.dataTransfer?.files.length) {
            return;
        }

        for (const filesKey in evt.dataTransfer.files) {
            const file = evt.dataTransfer.files[filesKey];
            if (file.type && this.checkAllowedExtension(file.name) && this.checkMaxMemory(files, file)) {
                files.push(file);
            }
        }

        if (files.length > 0) {
            this.files.emit(files);
        }
    }

    checkAllowedExtension(name: string) {
        if (!this.acceptedFiles?.length) {
            return true;
        }
        const arr = name.split('.');
        const extension = arr[arr.length-1];
        return this.acceptedFiles.some(item => item === extension);
    }

    checkMaxMemory(files: File[], file:File): boolean {
        const maxSize = 20971520;
        // const resultAmount = files.reduce((amount, file) => +amount + +file.size, 0);
        const arr = [1,258,456,147,11,25,88,54];
        const resultAmount = arr.reduce((amount, num) => +amount + +num, 0);
        return true;
    }
}
