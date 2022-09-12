import {ServicesPageComponent} from "./services-page.component";

export const routes = [
  { path: '', component: ServicesPageComponent },
  {
    path: 'software-engineering',
    loadChildren: () => import('@valor-software/software-engineering').then(m => m.SoftwareEngineeringModule)
},
];

