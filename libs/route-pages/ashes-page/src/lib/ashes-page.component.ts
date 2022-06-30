import { Component } from "@angular/core";

@Component({
  selector: 'ashes-page',
  templateUrl: './ashes-page.component.html'
})
export class AshesPageComponent {
  changeBreadCrumbTitle?: {path: string, title: string}[] = [{ path: 'ashes', title: 'Ashes of Creation'}];

}