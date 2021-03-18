import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos20LibrariePersonnelleComponent } from './demos20-librarie-personnelle.component';

const routes: Routes = [{ path: '', component: Demos20LibrariePersonnelleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos20LibrariePersonnelleRoutingModule { }
