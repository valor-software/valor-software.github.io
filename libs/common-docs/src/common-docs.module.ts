import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './lib/common/popover/popover.component';
import { TopMenuComponent } from './lib/common/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { ImgHoverDirective } from './lib/common/directives/img-hover.directive';
import { ContactModalComponent } from "./lib/common/contactModal/contactModal.components";
import { ModalService } from "./lib/common/services/modal.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FileUploaderModule } from '@valor-software/file-uploader';

@NgModule({
  declarations: [
    PopoverComponent,
    TopMenuComponent,
    ImgHoverDirective,
    ContactModalComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule, FileUploaderModule],
  exports: [
    TopMenuComponent,
    ImgHoverDirective,
    PopoverComponent
  ],
  providers: [ModalService]
})
export class CommonDocsModule {}
