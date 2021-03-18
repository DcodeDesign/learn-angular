import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos08FormulaireComponent } from './demos08-formulaire.component';

const routes: Routes = [{ path: '', component: Demos08FormulaireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos08FormulaireRoutingModule { }
