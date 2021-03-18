import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet02InputOutputComponent } from './projet02-input-output.component';

const routes: Routes = [{ path: '', component: Projet02InputOutputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet02InputOutputRoutingModule { }
