import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos24SentryErreursComponent } from './demos24-sentry-erreurs.component';

const routes: Routes = [{ path: '', component: Demos24SentryErreursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos24SentryErreursRoutingModule { }
