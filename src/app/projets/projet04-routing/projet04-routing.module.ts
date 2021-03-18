import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet04RoutingRoutingModule } from './projet04-routing-routing.module';
import { Projet04RoutingComponent } from './projet04-routing.component';


@NgModule({
  declarations: [Projet04RoutingComponent],
  imports: [
    CommonModule,
    Projet04RoutingRoutingModule
  ]
})
export class Projet04RoutingModule { }
