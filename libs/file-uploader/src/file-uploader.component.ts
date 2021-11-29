import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'file-uploader',
    templateUrl: './file-uploader.component.html'
})
export class FileUploaderComponent {
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
        console.log(this.files);
    }

    showEvent(event: File[]) {
        this.files = event;
        console.log(this.files);
    }
}
