import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos22GestionChargementRoutingModule } from './demos22-gestion-chargement-routing.module';
import { Demos22GestionChargementComponent } from './demos22-gestion-chargement.component';


@NgModule({
  declarations: [Demos22GestionChargementComponent],
  imports: [
    CommonModule,
    Demos22GestionChargementRoutingModule
  ]
})
export class Demos22GestionChargementModule { }
