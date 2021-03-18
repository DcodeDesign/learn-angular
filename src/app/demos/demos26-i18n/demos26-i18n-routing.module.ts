import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos26I18nComponent } from './demos26-i18n.component';

const routes: Routes = [{ path: '', component: Demos26I18nComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos26I18nRoutingModule { }
