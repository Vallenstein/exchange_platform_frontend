import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { CatalogComponent } from './catalog.component';
import { routing } from './catalog.routing';
import { LabSearchComponent } from '../lab-search/lab-search.component'


@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    CatalogComponent,
    LabSearchComponent,
  ]
})
export class CatalogModule { }  