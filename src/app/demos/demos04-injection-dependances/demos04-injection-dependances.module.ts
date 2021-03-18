import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos04InjectionDependancesRoutingModule } from './demos04-injection-dependances-routing.module';
import { Demos04InjectionDependancesComponent } from './demos04-injection-dependances.component';


@NgModule({
  declarations: [Demos04InjectionDependancesComponent],
  imports: [
    CommonModule,
    Demos04InjectionDependancesRoutingModule
  ]
})
export class Demos04InjectionDependancesModule { }
