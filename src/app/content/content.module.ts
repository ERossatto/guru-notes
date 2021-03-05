import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})

export class ContentModule { }
