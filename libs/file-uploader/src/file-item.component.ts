import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'file',
    templateUrl: './file-item.component.html'
})
export class FileComponent {
    @Input() file?: File;
    @Output() remove: EventEmitter<File> = new EventEmitter<File>();

    removeFile() {
        this.remove.emit(this.file);
    }
}
