import { Component, OnDestroy } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'nb-playground-oauth2-callback',
  template: `
    <nb-layout>
      <nb-layout-column>Authenticating...</nb-layout-column>
    </nb-layout>
  `,
})
export class NbOAuth2CallbackComponent implements OnDestroy {

  alive = true;

  constructor(private authService: NbAuthService, private router: Router, private location: Location) {
    this.authService.authenticate('gitlab')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess() && authResult.getRedirect()) {
          this.router.navigateByUrl(authResult.getRedirect());
        }
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
  goBack(): void {
    this.location.back();
  }
}