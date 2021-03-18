import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos07RoutingRoutingModule } from './demos07-routing-routing.module';
import { Demos07RoutingComponent } from './demos07-routing.component';


@NgModule({
  declarations: [Demos07RoutingComponent],
  imports: [
    CommonModule,
    Demos07RoutingRoutingModule
  ]
})
export class Demos07RoutingModule { }
