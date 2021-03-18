import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos10RequetesHttpComponent } from './demos10-requetes-http.component';

const routes: Routes = [{ path: '', component: Demos10RequetesHttpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos10RequetesHttpRoutingModule { }
