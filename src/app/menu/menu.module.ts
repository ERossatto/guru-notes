import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { MenuDashComponent } from './menu-dash/menu-dash.component';
import { HomeComponent } from '../content/home/home.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
}];

@NgModule({
  declarations: [
    MenuComponent,
    ToggleButtonComponent,
    MenuDashComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    MenuComponent,
  ]
})

export class MenuModule { }
