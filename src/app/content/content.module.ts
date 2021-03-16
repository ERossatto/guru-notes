import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    TesteComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})

export class ContentModule { }
