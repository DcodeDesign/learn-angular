import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos03DirectivesComponent } from './demos03-directives.component';

const routes: Routes = [{ path: '', component: Demos03DirectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos03DirectivesRoutingModule { }
