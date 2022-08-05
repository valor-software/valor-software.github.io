import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from "./feedback.component";
import {SwiperModule} from "swiper/angular";

export { FeedbackComponent } from "./feedback.component";

@NgModule({
    declarations: [FeedbackComponent],
    imports: [
        CommonModule,
        SwiperModule
    ],
    exports: [FeedbackComponent]
})
export class FeedbackModule { }
