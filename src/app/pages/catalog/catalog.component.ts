import { Component, OnInit } from '@angular/core';

import { Lab } from '../lab';
import { LabService } from '../lab.service';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styles: [`
    nb-progress-bar ~ nb-progress-bar {
      margin-top: 1rem;
    }
:host {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
nb-card {
  min-width: 18rem;
  width: 48%;
}
`],
})

export class CatalogComponent implements OnInit {

  labs: Lab[] = [];

  constructor(private labService: LabService) { }


  ngOnInit(): void {
    this.getLabs();
  }

  getLabs(): void {
    this.labService.getLabs()
      .subscribe(labs => this.labs = labs);
  }
  getHeroes(): void {
    this.labService.getLabs()
      .subscribe(labs => this.labs = labs.slice(1, 5));
  }
}