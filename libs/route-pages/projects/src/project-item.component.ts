import {Component, Input} from '@angular/core';
import { IPortfolio } from "@valor-software/portfolio";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'project-item',
    template: `
        <div class="project-item">
            <div class="img-container lg:h-350 zoom-img-scale">
                <img class="w-full h-full object-cover" [src]="project?.previewImg" [alt]="project?.name + 'img'">
            </div>
            <div class="text-container">
                <p>{{project?.name}}</p>
            </div>
        </div>
    `
})
export class ProjectItemComponent {
    @Input() project?: IPortfolio;

}