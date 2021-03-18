import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos08FormulaireRoutingModule } from './demos08-formulaire-routing.module';
import { Demos08FormulaireComponent } from './demos08-formulaire.component';


@NgModule({
  declarations: [Demos08FormulaireComponent],
  imports: [
    CommonModule,
    Demos08FormulaireRoutingModule
  ]
})
export class Demos08FormulaireModule { }
