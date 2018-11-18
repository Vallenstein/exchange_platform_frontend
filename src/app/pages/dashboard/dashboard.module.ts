import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { CountUpModule } from 'countup.js-angular2';

//for the chart
import { ChartModule } from 'angular2-chartjs';
import { ChartjsLineComponent } from './chartjs-line.component';



@NgModule({
  imports: [
    ThemeModule,
    CountUpModule,
    ChartModule,
  ],
  declarations: [
    DashboardComponent,
    ChartjsLineComponent,
  ],
})
export class DashboardModule { }
