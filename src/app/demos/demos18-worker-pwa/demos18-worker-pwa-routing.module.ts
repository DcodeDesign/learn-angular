import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos18WorkerPwaComponent } from './demos18-worker-pwa.component';

const routes: Routes = [{ path: '', component: Demos18WorkerPwaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos18WorkerPwaRoutingModule { }
