import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent {
  @Input() ponyModel!: PonyModel; //pony to display
  @Output() readonly ponyClicked = new EventEmitter<PonyModel>();

  getPonyImageUrl() {
    return `assets/images/pony-${this.ponyModel?.color?.toLowerCase()}.gif`;
  }
  

  clicked(): void {
    this.ponyClicked.emit(this.ponyModel);
  }
}
