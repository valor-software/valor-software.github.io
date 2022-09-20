import { ProductOwnershipAndProjectManagementComponent } from './pages/product-owner-and-product-management/product-owner-and-product-management.component';
import { ServicesPageComponent } from "./services-page.component";

export const routes = [
  { path: '', component: ServicesPageComponent },
  { path: 'product-ownership-and-project-management', component: ProductOwnershipAndProjectManagementComponent }
];

