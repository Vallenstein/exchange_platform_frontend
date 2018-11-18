import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import axios from 'axios';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';

import { Lab } from '../lab';
import { LabService } from '../lab.service';

export interface TokenDialogData {
  [index:number]:string
}

@Component({
  selector: 'lab-details',
  templateUrl: './lab-details.component.html',
  styleUrls: ['./chartjs.component.scss'],
})

export class LabDetailsComponent implements OnInit {

  token: NbAuthOAuth2Token;

  alive = true;

  constructor(
    private authService: NbAuthService, 
    private location: Location,
    private route: ActivatedRoute,
    private labService: LabService,
    ) {
    this.authService.onTokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((token: NbAuthOAuth2Token) => {
        this.token = null;
        if (token && token.isValid()) {
          this.token = token;
        }
      });
  }



  @Input() lab: Lab;

  ngOnInit(): void {
    this.getLab();
    
  }

  getLab(): void {
    var id = +this.route.snapshot.paramMap.get('id');
    this.labService.getLab(id)
      .subscribe(lab => this.lab = lab);
  }

  goBack(): void {
    this.location.back();
  }

  numbertokens: number;

  openDialog(data) {
      }


  generate(): void { //Change Here to Spring API URL
    axios.get('http://localhost:4201/api/v1/lab/' + this.lab.id + '/tokens?n=' + this.numbertokens)
      .then(function (response) {
        this.openDialog(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
