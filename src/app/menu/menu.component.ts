import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Output() activeOption: EventEmitter<string> = new EventEmitter();

  public checkMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleClick(event): void {
    this.checkMenu = event;
  }

  public onOptionClick(optionName: string): void {
    this.activeOption.emit(optionName)
  }
}
