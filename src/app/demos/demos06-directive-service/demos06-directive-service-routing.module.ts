import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos06DirectiveServiceComponent } from './demos06-directive-service.component';

const routes: Routes = [{ path: '', component: Demos06DirectiveServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos06DirectiveServiceRoutingModule { }
