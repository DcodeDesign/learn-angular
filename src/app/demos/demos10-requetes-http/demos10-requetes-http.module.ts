import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos10RequetesHttpRoutingModule } from './demos10-requetes-http-routing.module';
import { Demos10RequetesHttpComponent } from './demos10-requetes-http.component';


@NgModule({
  declarations: [Demos10RequetesHttpComponent],
  imports: [
    CommonModule,
    Demos10RequetesHttpRoutingModule
  ]
})
export class Demos10RequetesHttpModule { }
