import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos19UniversalComponent } from './demos19-universal.component';

const routes: Routes = [{ path: '', component: Demos19UniversalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos19UniversalRoutingModule { }
