import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    ContentComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentComponent,
  ]
})

export class ContentModule { }
