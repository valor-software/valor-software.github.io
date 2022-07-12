import { Component, Input } from "@angular/core";
import { MappedTechnology, Technologies } from "./types";
import { technologiesAndServices } from "./technologies-and-services";


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'valor-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

  public technologies: MappedTechnology[] = [];

  @Input() set technologyNames(technologyNames: Technologies[]) {
    this.technologies = technologyNames.map(t => technologiesAndServices[t]);
  };

}
