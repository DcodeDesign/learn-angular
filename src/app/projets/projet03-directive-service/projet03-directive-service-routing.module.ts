import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet03DirectiveServiceComponent } from './projet03-directive-service.component';

const routes: Routes = [{ path: '', component: Projet03DirectiveServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet03DirectiveServiceRoutingModule { }
