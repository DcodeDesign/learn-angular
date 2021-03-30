import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Projet04RoutingComponent} from './projet04-routing.component';
import {PanierContainerComponent} from './components/panier-container/panier-container.component';
import {Cocktail03ContainerComponent} from './components/cocktail03-container/cocktail03-container.component';

const routes: Routes = [
  {
    path: '', component: Projet04RoutingComponent,
    children: [
      {path: '', component: Cocktail03ContainerComponent},
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
