import { SoftwareEngineeringComponent } from './pages/software-engineering/software-engineering.component';
import { ServicesPageComponent } from "./services-page.component";

export const routes = [
  { path: '', component: ServicesPageComponent },
  {
    path: 'software-engineering', component: SoftwareEngineeringComponent
  },
];

