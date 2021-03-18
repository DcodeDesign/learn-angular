import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos12AnimationsComponent } from './demos12-animations.component';

const routes: Routes = [{ path: '', component: Demos12AnimationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos12AnimationsRoutingModule { }
