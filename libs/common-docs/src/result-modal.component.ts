import {Component, Input} from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'result-modal',
    templateUrl: './result-modal.component.html'
})
export class ResultModalComponent {
    @Input() type?: 'success' | 'error';
}
