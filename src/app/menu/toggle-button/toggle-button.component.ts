import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'menu-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit, OnChanges {


  @Input() toggle: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter()

  public checkMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges( changes: SimpleChanges ) {
    this._toggleCollapse(changes.toggle.currentValue);
  }

  private _toggleCollapse(toggle: boolean): void {
    if (!toggle) this.checkMenu = false;
  }

  public onMenuClick(): void {
    this.checkMenu = !this.checkMenu;
    this.onClick.emit(this.checkMenu);
  }
}
