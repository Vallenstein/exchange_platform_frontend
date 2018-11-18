import { Routes, RouterModule } from '@angular/router';

import { FaqsComponent } from './faqs.component';

const routes: Routes = [
  {
    path: '',
    component: FaqsComponent,
  }
];

export const routing = RouterModule.forChild(routes);