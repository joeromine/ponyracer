import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent {
  @Input() ponyModel: any; //pony to display

  constructor() {}
  @Output() ponyClicked = new EventEmitter<any>();

  getPonyImageUrl() {
    return `assets/images/pony-${this.ponyModel?.color?.toLowerCase()}.gif`;
  }
  

  clicked(){
    this.ponyClicked = this.ponyModel;
  }
}
