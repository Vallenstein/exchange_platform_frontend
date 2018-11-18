import { Routes, RouterModule } from '@angular/router';

import { LabDetailsComponent } from './lab-details.component';

const routes: Routes = [
  {
    path: '',
    component: LabDetailsComponent,
  },

];

export const routing = RouterModule.forChild(routes);