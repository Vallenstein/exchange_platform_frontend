/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { NbOAuth2AuthStrategy, NbAuthModule, NbOAuth2ResponseType } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth-guard.service';
import { NbDialogModule } from '@nebular/theme'

@NgModule({
  declarations: [AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbDialogModule.forRoot(),
    

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'gitlab',
          clientId: 'cc36f0f0e5b368eb2181aae06dbb153f87dd38b57e457cf586cfd93b7005c75e', //Change here to GitLab OAuth ID
          clientSecret: '',
          authorize: {
            endpoint: 'http://localhost:9080/oauth/authorize', //Change here
            responseType: NbOAuth2ResponseType.TOKEN,
            redirectUri: 'http://localhost:4200/auth/callback' //Change here to your frontend URL
          },
        }),
      ],
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    NbToastrService,    
    AuthGuard,
  ],
})
export class AppModule {
}
