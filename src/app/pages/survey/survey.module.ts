import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { SurveyComponent } from './survey.component';
import { routing } from './survey.routing';
import { NbToastrModule } from '@nebular/theme';

export const NB_MODULES = [
  NbToastrModule.forRoot(),
]

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    routing,
    NB_MODULES,
  ],
  declarations: [
    SurveyComponent,
  ]
})

export class SurveyModule { }