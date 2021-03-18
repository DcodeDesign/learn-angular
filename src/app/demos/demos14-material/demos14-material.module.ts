import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos14MaterialRoutingModule } from './demos14-material-routing.module';
import { Demos14MaterialComponent } from './demos14-material.component';


@NgModule({
  declarations: [Demos14MaterialComponent],
  imports: [
    CommonModule,
    Demos14MaterialRoutingModule
  ]
})
export class Demos14MaterialModule { }
