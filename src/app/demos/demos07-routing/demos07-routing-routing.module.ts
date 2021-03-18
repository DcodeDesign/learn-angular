import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos07RoutingComponent } from './demos07-routing.component';

const routes: Routes = [{ path: '', component: Demos07RoutingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos07RoutingRoutingModule { }
