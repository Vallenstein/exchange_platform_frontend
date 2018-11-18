import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Lab } from '../lab';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-lab-search',
  templateUrl: './lab-search.component.html',
  styleUrls: [ './lab-search.component.css' ]
})
export class LabSearchComponent implements OnInit {
  labs$: Observable<Lab[]>;
  private searchTerms = new Subject<string>();

  constructor(private labService: LabService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.labs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.labService.searchLabs(term)),
    );
  }
}