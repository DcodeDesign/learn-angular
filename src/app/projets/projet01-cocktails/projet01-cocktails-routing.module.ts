import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Projet01CocktailsComponent } from './projet01-cocktails.component';

const routes: Routes = [{ path: '', component: Projet01CocktailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet01CocktailsRoutingModule { }
