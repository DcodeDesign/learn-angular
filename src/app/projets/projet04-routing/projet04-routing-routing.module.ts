import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Projet04RoutingComponent} from './projet04-routing.component';
import {PanierContainerComponent} from './components/panier-container/panier-container.component';
import {Cocktail03ContainerComponent} from './components/cocktail03-container/cocktail03-container.component';
import {Cocktail04DetailComponent} from './components/cocktail03-container/cocktail04-detail/cocktail04-detail.component';
import {CocktailFormComponent} from './components/cocktail-form/cocktail-form.component';

const routes: Routes = [
  {
    path: '', component: Projet04RoutingComponent,
    children: [
      {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
      {path: 'cocktails', component: Cocktail03ContainerComponent , children: [
          { path: 'new', component: CocktailFormComponent },
          { path: ':index/edit', component: CocktailFormComponent},
          { path: ':index', component: Cocktail04DetailComponent },
          { path: '', redirectTo: '0', pathMatch: 'full' }
        ]},
      {path: 'panier', component: PanierContainerComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projet04RoutingRoutingModule {
}
