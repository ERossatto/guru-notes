import { Component, OnInit } from '@angular/core';

import { Stack } from './teste.interface';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})

export class TesteComponent implements OnInit {

  public stack = new Stack<number>();

  public teste: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    // this.stack.push(42);

    this.teste = this.stack.pop();
  }
}
