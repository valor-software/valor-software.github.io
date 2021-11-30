import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'file-uploader',
    templateUrl: './file-uploader.component.html'
})
export class FileUploaderComponent {
    @Output() filesChanged: EventEmitter<File[]> = new EventEmitter<File[]>();

    files: File[] = [];

    onFileChange(event: Event) {
        const files: File[] = [];
        if (!(event?.target as HTMLInputElement)?.files?.length) {
            return;
        }

        for (const filesKey in (event?.target as HTMLInputElement)?.files) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const file = (event?.target as HTMLInputElement)?.files?.[filesKey];
            if (file.type) {
                files.push(file);
            }
        }

        if (files.length) {
            this.files = files;
        }
        this.filesChanged.emit(this.files);
    }

    addFiles(event: File[]) {
        this.files = event;
        this.filesChanged.emit(this.files);
    }

    removeFile(file: File) {
        this.files = this.files.filter(item => item !== file);
        this.filesChanged.emit(this.files);
    }
}
