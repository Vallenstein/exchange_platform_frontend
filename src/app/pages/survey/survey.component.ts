import { Component } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import axios from 'axios'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
})

export class SurveyComponent {
  constructor(
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
  ) {
  }

  quest1: String;
  quest2: String;
  quest3;
  quest4;
  quest5: String;
  quest6: String;

  submit(): void {
    if (!this.quest1) {
      this.toastrService.show('Answer all questions', 'Please answer question 1!');
    } else
      if (!this.quest2) {
        this.toastrService.show('Answer all questions', 'Please answer question 2!');
      } else
        if (!this.quest3) {//hours in prelab
          this.toastrService.show('Answer all questions', 'Please answer question 3!');
        } else
          if (!Number.isInteger(this.quest3)) {//hours in prelab
            this.toastrService.show('Provide Integers only', 'Please answer question 3 with a number!');
          } else
            if (!this.quest4) {//hours in Lab
              this.toastrService.show('Answer all questions', 'Please answer question 4!');
            } else
              if (!Number.isInteger(this.quest4)) {//hours in prelab
                this.toastrService.show('Provide Integers only', 'Please answer question 4 with a number!');
              } else
                if (!this.quest5) {
                  this.toastrService.show('Answer all questions', 'Please answer question 5!');
                } else
                  this.toastrService.show('Thanks for your Feedback!', 'You can close this page now!');
    let answers = {
      difficult: Number(this.quest1),
      interesting: Number(this.quest2),
      prelabtime: Number(this.quest3),
      labtime: Number(this.quest4),
      rate: Number(this.quest5),
      comment: this.quest6,
    }
    //Change Here to Spring API URL
    let token = this.route.snapshot.queryParams["token"];
    axios.post('http://localhost:4201/api/v1/result?token=' + token, answers)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};