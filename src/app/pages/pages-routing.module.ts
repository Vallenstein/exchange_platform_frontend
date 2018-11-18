import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth-guard.service';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'catalog',
      loadChildren: './catalog/catalog.module#CatalogModule'
    },
    {
      path: 'lab/:id',
      canActivate: [AuthGuard],
      loadChildren: './lab-details/lab-details.module#LabDetailsModule',
    },
    {
      path: 'survey',
      loadChildren: './survey/survey.module#SurveyModule'
    },
    {
      path: 'faqs',
      loadChildren: './faqs/faqs.module#FaqsModule'
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
