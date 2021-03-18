import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet07NgrxComponent } from './projet07-ngrx.component';

const routes: Routes = [{ path: '', component: Projet07NgrxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet07NgrxRoutingModule { }
