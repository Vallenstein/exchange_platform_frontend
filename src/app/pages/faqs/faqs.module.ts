import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { FaqsComponent } from './faqs.component';
import { routing } from './faqs.routing';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    FaqsComponent,
  ]
})
export class FaqsModule { }