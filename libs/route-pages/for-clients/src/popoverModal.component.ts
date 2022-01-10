import {Component } from '@angular/core';
import { CurrentPopoversService } from "./currentPopovers.service";
import {ModalService} from "@valor-software/common-docs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'popoverModal',
    templateUrl: './popoverModal.component.html'
})
export class PopoverModalComponent {
    popoverInf?: {title: string, subTitle?: string, list: string[]};

    constructor(
        private currentPopoverServ: CurrentPopoversService,
        private modalService: ModalService<PopoverModalComponent>,

    ) {
        this.popoverInf = this.currentPopoverServ.getCurrentPopover();
    }

    closeModal() {
        this.modalService.close();
    }
}
