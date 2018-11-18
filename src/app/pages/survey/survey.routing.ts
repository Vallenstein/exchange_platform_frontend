import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent,
  }
];

export const routing = RouterModule.forChild(routes);