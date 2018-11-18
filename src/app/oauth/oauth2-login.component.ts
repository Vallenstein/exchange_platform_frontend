import { Component, OnDestroy } from '@angular/core';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'nb-playground-auth',
  template: `
      <nb-layout center>
        <nb-layout-column>
          <nb-card>
            <nb-card-body>
              <h5>Logged in? {{ !!token }}</h5>
              <p *ngIf="token">If you need your current User Token: {{ token||json }}</p>
              <p *ngIf="!token">Please log in to see your User Token</p>
              <button nbButton status="success" *ngIf="!token" (click)="login()">Sign In with Gitlab</button>
              <button nbButton status="warning" *ngIf="token" (click)="logout()">Sign Out</button>
              <button nbButton (click)="goBack()">go back</button>
            </nb-card-body>
          </nb-card>
        </nb-layout-column>
      </nb-layout>
    `,
})
export class NbOAuth2LoginComponent implements OnDestroy {

  token: NbAuthOAuth2Token;

  alive = true;

  constructor(private authService: NbAuthService, private location: Location) {
    this.authService.onTokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((token: NbAuthOAuth2Token) => {
        this.token = null;
        if (token && token.isValid()) {
          this.token = token;
        }
      });
  }

  login() {
    this.authService.authenticate('gitlab')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
      });
  }

  logout() {
    this.authService.logout('gitlab')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
  goBack(): void {
    this.location.back();
  }
}