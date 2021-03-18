import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos17RxjsTestComponent } from './demos17-rxjs-test.component';

const routes: Routes = [{ path: '', component: Demos17RxjsTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos17RxjsTestRoutingModule { }
