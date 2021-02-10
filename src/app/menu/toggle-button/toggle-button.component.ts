import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  public checkMenu: boolean = false;

  @Output() onClick: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuClick(): void {
    this.checkMenu = !this.checkMenu;
    this.onClick.emit(this.checkMenu);
  }
}
