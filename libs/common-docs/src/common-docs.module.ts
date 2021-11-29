import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { TopMenuComponent } from './top-menu.component';
import { RouterModule } from '@angular/router';
import { ImgHoverDirective } from './img-hover.directive';
import { ContactModalComponent } from "./contactModal.components";
import { ModalService } from "./modal.service";
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
