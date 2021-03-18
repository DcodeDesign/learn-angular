import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos22GestionChargementComponent } from './demos22-gestion-chargement.component';

const routes: Routes = [{ path: '', component: Demos22GestionChargementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos22GestionChargementRoutingModule { }
