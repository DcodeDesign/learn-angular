import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos04InjectionDependancesComponent } from './demos04-injection-dependances.component';

const routes: Routes = [{ path: '', component: Demos04InjectionDependancesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos04InjectionDependancesRoutingModule { }
