import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos25ServicesMetaTitleComponent } from './demos25-services-meta-title.component';

const routes: Routes = [{ path: '', component: Demos25ServicesMetaTitleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos25ServicesMetaTitleRoutingModule { }
