import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos01DatabindingRoutingModule } from './demos01-databinding-routing.module';
import { Demos01DatabindingComponent } from './demos01-databinding.component';


@NgModule({
  declarations: [Demos01DatabindingComponent],
  imports: [
    CommonModule,
    Demos01DatabindingRoutingModule
  ]
})
export class Demos01DatabindingModule { }
