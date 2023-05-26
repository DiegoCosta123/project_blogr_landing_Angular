import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  isMdenuBurguerOpen = false

  handleOpenMenu() {
    this.isMdenuBurguerOpen = true;
  }

  handleCloseMenu() {
    this.isMdenuBurguerOpen = false;
  }

}
