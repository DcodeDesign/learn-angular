import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet04RoutingComponent } from './projet04-routing.component';

const routes: Routes = [{ path: '', component: Projet04RoutingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet04RoutingRoutingModule { }
