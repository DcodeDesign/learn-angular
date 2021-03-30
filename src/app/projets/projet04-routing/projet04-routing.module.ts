import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet04RoutingRoutingModule } from './projet04-routing-routing.module';
import { Projet04RoutingComponent } from './projet04-routing.component';

import {FormsModule} from '@angular/forms';
import {Header04Component} from './components/header04/header04.component';
import {Cocktail04ListComponent} from './components/cocktail03-container/cocktail04-list/cocktail04-list.component';
import {Cocktail04DetailComponent} from './components/cocktail03-container/cocktail04-detail/cocktail04-detail.component';
import {Cocktail03ContainerComponent} from './components/cocktail03-container/cocktail03-container.component';
import {Selected02Directive} from './shared/directives/selected02.directive';


@NgModule({
  declarations: [Projet04RoutingComponent,
    Header04Component,
    Cocktail04ListComponent,
    Cocktail04DetailComponent,
    Cocktail03ContainerComponent,
    Selected02Directive],
  imports: [
    CommonModule,
    Projet04RoutingRoutingModule,
    FormsModule
  ]
})
export class Projet04RoutingModule { }
