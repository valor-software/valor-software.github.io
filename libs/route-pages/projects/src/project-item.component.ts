import {Component, Input} from '@angular/core';
import { IPortfolio } from "@valor-software/portfolio";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'project-item',
    template: `
        <div class="w-full flex flex-col justify-between mb-16">
            <div class="w-full lg:h-350 mb-6">
                <img class="w-full h-full object-cover" [src]="project?.previewImg" [alt]="project?.name + 'img'">
            </div>
            <div class="w-full text-light_title_col text-24 md:text-32 leading-40 font-bold">
                <p>{{project?.name}}</p>
            </div>
        </div>
    `
})
export class ProjectItemComponent {
    @Input() project?: IPortfolio;

}