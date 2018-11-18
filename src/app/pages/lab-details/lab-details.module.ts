import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { LabDetailsComponent } from './lab-details.component';
import { routing } from './lab-details.routing';
import { NbDialogModule } from '@nebular/theme';


import { ChartjsPieComponent } from './chartjs-pie.component';
import { ChartjsBarHorizontalComponent } from './time-chart.component';
import {InterestingChart} from './interesting-chart.component';

export const NB_MODULES = [
  NbDialogModule.forRoot(),
]

const components = [
  ChartjsPieComponent,
  ChartjsBarHorizontalComponent,
  InterestingChart,
]

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    routing,
    ChartModule,
    NbDialogModule,
  ],
  declarations: [
    LabDetailsComponent,
    ...components,
  ],
})
export class LabDetailsModule { }