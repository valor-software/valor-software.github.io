import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  @Input() companyName!: string;

  @Input() companyImageSrc!: string;

  @Input() companyHref!: string;

}
