import { DevOpsComponent } from './pages/devops/devops.component';
import {ServicesPageComponent} from "./services-page.component";

export const routes = [
  { path: '', component: ServicesPageComponent },
  { path: 'devops', component: DevOpsComponent }
];

