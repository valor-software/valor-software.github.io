import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './components/popover/popover.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { ImgHoverDirective } from './directives/img-hover.directive';
import { ContactModalComponent } from "./components/contact-modal/contactModal.components";
import { ModalService } from "./services/modal.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FileUploaderModule } from '@valor-software/file-uploader';
import { SendEmailService } from './services/senEmail.service';
import { ResultModalComponent } from './components/result-modal/result-modal.component';
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { ServicesBlockComponent } from './components/services_block/services-block.component';
import { BreadCrumbsComponent } from './components/breadCrumbs/breadCrumbs.component';

export { PopoverComponent } from './components/popover/popover.component';
export { TopMenuComponent } from './components/top-menu/top-menu.component';
export { ImgHoverDirective } from './directives/img-hover.directive';
export { AppFooterComponent } from "./components/app-footer/app-footer.component";
export { ServicesBlockComponent } from './components/services_block/services-block.component';
export { ContactModalComponent } from "./components/contact-modal/contactModal.components";
export { ModalService } from './services/modal.service';
export { BreadCrumbsComponent } from './components/breadCrumbs/breadCrumbs.component';


@NgModule({
  declarations: [
    PopoverComponent,
    TopMenuComponent,
    ImgHoverDirective,
    ContactModalComponent,
    ResultModalComponent,
    AppFooterComponent,
    ServicesBlockComponent,
    BreadCrumbsComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule, FileUploaderModule],
  exports: [
    TopMenuComponent,
    ImgHoverDirective,
    PopoverComponent,
    AppFooterComponent,
    ServicesBlockComponent,
    BreadCrumbsComponent
  ],
  providers: [ModalService, SendEmailService]
})
export class CommonDocsModule {}
