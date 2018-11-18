import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  NbCardModule,
  NbLayoutModule,
} from '@nebular/theme';

import {
  NbAuthModule,
  NbOAuth2AuthStrategy,
  NbOAuth2ResponseType,
} from '@nebular/auth';

import { NbOAuth2LoginComponent } from './oauth2-login.component';
import { NbOAuth2CallbackComponent } from './oauth2-callback.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: NbOAuth2LoginComponent,
      },
      {
        path: 'callback',
        component: NbOAuth2CallbackComponent,
      },
    ]),

    NbCardModule,
    NbLayoutModule,
  ],
  declarations: [
    NbOAuth2LoginComponent,
    NbOAuth2CallbackComponent,
  ],
})
export class NbOAuth2Module {
}