import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos21FormulaireAvanceeRoutingModule } from './demos21-formulaire-avancee-routing.module';
import { Demos21FormulaireAvanceeComponent } from './demos21-formulaire-avancee.component';


@NgModule({
  declarations: [Demos21FormulaireAvanceeComponent],
  imports: [
    CommonModule,
    Demos21FormulaireAvanceeRoutingModule
  ]
})
export class Demos21FormulaireAvanceeModule { }
