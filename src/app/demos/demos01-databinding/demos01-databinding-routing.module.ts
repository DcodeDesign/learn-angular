import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos01DatabindingComponent } from './demos01-databinding.component';

const routes: Routes = [{ path: '', component: Demos01DatabindingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos01DatabindingRoutingModule { }
