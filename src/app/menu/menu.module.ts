import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { MenuDashComponent } from './menu-dash/menu-dash.component';

@NgModule({
  declarations: [
    MenuComponent,
    ToggleButtonComponent,
    MenuDashComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuComponent,
  ]
})

export class MenuModule { }
