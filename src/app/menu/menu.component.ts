import { Component, Input } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() navbarCollapsed = true;
  constructor() {}

  toggleNavbar() {
    this.navbarCollapsed = this.navbarCollapsed ? false : true;
  }
}
