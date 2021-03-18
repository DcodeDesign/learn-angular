import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos05ObservableComponent } from './demos05-observable.component';

const routes: Routes = [{ path: '', component: Demos05ObservableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos05ObservableRoutingModule { }
