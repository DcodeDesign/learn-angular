import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos21FormulaireAvanceeComponent } from './demos21-formulaire-avancee.component';

const routes: Routes = [{ path: '', component: Demos21FormulaireAvanceeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos21FormulaireAvanceeRoutingModule { }
