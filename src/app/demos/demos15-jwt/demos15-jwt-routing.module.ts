import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos15JwtComponent } from './demos15-jwt.component';

const routes: Routes = [{ path: '', component: Demos15JwtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos15JwtRoutingModule { }
