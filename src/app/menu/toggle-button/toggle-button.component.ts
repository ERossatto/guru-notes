import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  public checkMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuClick(): void {
    this.checkMenu = !this.checkMenu;

    console.log('checkMenu-->: ', this.checkMenu);
  }

}
