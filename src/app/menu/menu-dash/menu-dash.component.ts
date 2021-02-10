import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'menu-dash',
  templateUrl: './menu-dash.component.html',
  styleUrls: ['./menu-dash.component.scss']
})
export class MenuDashComponent implements OnInit, OnChanges {

  @Input() toogle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges( change: SimpleChanges ) {
    console.log('TOOGLE-->: ', this.toogle);

  }

}
