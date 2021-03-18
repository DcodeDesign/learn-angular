import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos09PipesComponent } from './demos09-pipes.component';

const routes: Routes = [{ path: '', component: Demos09PipesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos09PipesRoutingModule { }
