import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet05FormulairesComponent } from './projet05-formulaires.component';

const routes: Routes = [{ path: '', component: Projet05FormulairesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet05FormulairesRoutingModule { }
