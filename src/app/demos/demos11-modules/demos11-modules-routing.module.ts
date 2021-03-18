import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos11ModulesComponent } from './demos11-modules.component';

const routes: Routes = [{ path: '', component: Demos11ModulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos11ModulesRoutingModule { }
