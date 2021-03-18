import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet08TodolistComponent } from './projet08-todolist.component';

const routes: Routes = [{ path: '', component: Projet08TodolistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet08TodolistRoutingModule { }
