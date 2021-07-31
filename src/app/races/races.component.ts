import { Component, Input, OnInit } from '@angular/core';
import { RaceModel } from '../models/RaceModel/race.model';
@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  @Input() races: Array<RaceModel> = [];
  constructor() {}

  ngOnInit(): void {
    this.races = [{ name: 'Lyon' }, { name: 'London' }];
  }
}
