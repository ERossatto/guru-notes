import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-dash',
  templateUrl: './menu-dash.component.html',
  styleUrls: ['./menu-dash.component.scss']
})
export class MenuDashComponent implements OnInit {

  @Input() toogle: boolean = false;
  @Output() activeOption: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onOptionClick(optionName: string): void {
    this.activeOption.emit(optionName);
  }

}
