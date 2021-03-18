import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos14MaterialComponent } from './demos14-material.component';

const routes: Routes = [{ path: '', component: Demos14MaterialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos14MaterialRoutingModule { }
