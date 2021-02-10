import { Component, OnInit } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public checkMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleClick(event): void {
    this.checkMenu = event;
  }
}
