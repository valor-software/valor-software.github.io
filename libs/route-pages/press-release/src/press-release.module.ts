import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./routes";
import { PressReleaseComponent } from "./press-release.component";
import { QuoteComponent } from './quote/quote.component';
import { PersonComponent } from "./person/person.component";
import { CompanyComponent } from "./company/company.component";

@NgModule({
  declarations: [PressReleaseComponent, QuoteComponent, PersonComponent, CompanyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PressReleaseModule {
  static routes: Routes = routes;
}
