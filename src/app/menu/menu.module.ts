import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    MenuComponent,
    ToggleButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuComponent,
  ]
})

export class MenuModule { }
