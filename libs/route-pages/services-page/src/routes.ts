import { QualityAssuranceComponent } from './pages/quality-assurance/quality-assurance.component';
import {ServicesPageComponent} from "./services-page.component";

export const routes = [
  { path: '', component: ServicesPageComponent },
  { path: 'quality-assurance', component: QualityAssuranceComponent },

];

