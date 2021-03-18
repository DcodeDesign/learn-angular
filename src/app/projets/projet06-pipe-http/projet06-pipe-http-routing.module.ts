import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet06PipeHttpComponent } from './projet06-pipe-http.component';

const routes: Routes = [{ path: '', component: Projet06PipeHttpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet06PipeHttpRoutingModule { }
