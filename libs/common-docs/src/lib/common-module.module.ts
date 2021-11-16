import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './common/popover/popover.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';

export { PopoverComponent } from './common/popover/popover.component';
export { TopMenuComponent } from './common/top-menu/top-menu.component';

@NgModule({
  declarations: [
    PopoverComponent,
    TopMenuComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    PopoverComponent,
    TopMenuComponent
  ]
})
export class CommonDocsModule {}
