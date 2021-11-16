import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './common/popover/popover.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { ImgHoverDirective } from './common/directives/img-hover.directive'
import {POPOVER_STRUCTURE} from "./common/tokens/popoverModel.token";
import {PopoverStructure} from "./common/models/popover.model";

export { PopoverComponent } from './common/popover/popover.component';
export { TopMenuComponent } from './common/top-menu/top-menu.component';

@NgModule({
  declarations: [
    PopoverComponent,
    TopMenuComponent,
    ImgHoverDirective
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    PopoverComponent,
    TopMenuComponent
  ],
  providers: [
    { provide: POPOVER_STRUCTURE, useValue: PopoverStructure }
  ]
})
export class CommonDocsModule {}
