import { DevOpsComponent } from './pages/devops/devops.component';
import { ServicesPageComponent } from "./services-page.component";
import { ProductOwnershipAndProjectManagementComponent } from './pages/product-owner-and-product-management/product-owner-and-product-management.component';
import { SupportMaintenanceComponent } from './pages/support-maintenance/support-maintenance.component';
import { DesignComponent } from './pages/design/design.component';
import { SoftwareEngineeringComponent } from './pages/software-engineering/software-engineering.component';

export const routes = [
  { path: '', component: ServicesPageComponent },
  { path: 'devops', component: DevOpsComponent },
  { path: 'product-ownership-and-project-management', component: ProductOwnershipAndProjectManagementComponent },
  { path: 'support-&-Maintenance', component: SupportMaintenanceComponent },
  { path: 'design', component: DesignComponent },
  { path: 'software-engineering', component: SoftwareEngineeringComponent }
];

