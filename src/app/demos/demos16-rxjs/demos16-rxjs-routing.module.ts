import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos16RxjsComponent } from './demos16-rxjs.component';

const routes: Routes = [{ path: '', component: Demos16RxjsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos16RxjsRoutingModule { }
