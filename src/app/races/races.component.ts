import { Component } from '@angular/core';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent  {
  title = 'race'
  countRaces: number = 0
  ponyIsSelected: boolean = true;
  races: Array<any> = []
  constructor() { }

  refreshRaces(event: any){
    event.preventDefault();
    event.stopPropagation();
    this.countRaces = (this.countRaces == 2) ? 0 : 2;

  }



}
