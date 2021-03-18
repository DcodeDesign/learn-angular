import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos13TestComponent } from './demos13-test.component';

const routes: Routes = [{ path: '', component: Demos13TestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos13TestRoutingModule { }
