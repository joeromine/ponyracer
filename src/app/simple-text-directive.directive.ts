import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[loggable]',
})
export class SimpleTExtDirectiveDirective {
  @Input() set logText(value: string){
    console.log(value)
  }
}