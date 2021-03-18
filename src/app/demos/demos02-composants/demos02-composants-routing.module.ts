import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos02ComposantsComponent } from './demos02-composants.component';

const routes: Routes = [{ path: '', component: Demos02ComposantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos02ComposantsRoutingModule { }
