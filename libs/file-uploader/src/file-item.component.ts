import { Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'file',
    templateUrl: './file-item.component.html'
})
export class FileComponent {
    @Input() file?: File;
}
