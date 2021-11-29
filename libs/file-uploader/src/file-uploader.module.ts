import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader.component';
import { FileDragDirective } from './file-drag.directive';
import { FileComponent } from "./file-item.component";

export { FileUploaderComponent } from './file-uploader.component';

@NgModule({
  declarations: [FileUploaderComponent, FileDragDirective, FileComponent],
  imports: [
    CommonModule
  ],
  exports: [FileUploaderComponent]
})
export class FileUploaderModule { }
        