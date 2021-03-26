import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Projet02InputOutputRoutingModule} from './projet02-input-output-routing.module';
import {Projet02InputOutputComponent} from './projet02-input-output.component';
import {Cocktail02ListComponent} from './components/cocktail-container/cocktail02-list/cocktail02-list.component';
import {Cocktail02DetailComponent} from './components/cocktail-container/cocktail02-detail/cocktail02-detail.component';
import {Header02Component} from './components/header02/header02.component';
import { CocktailContainerComponent } from './components/cocktail-container/cocktail-container.component';


@NgModule({
  declarations: [Projet02InputOutputComponent,
    Header02Component,
    Cocktail02ListComponent,
    Cocktail02DetailComponent,
    CocktailContainerComponent

  ],
  imports: [
    CommonModule,
    Projet02InputOutputRoutingModule
  ]
})
export class Projet02InputOutputModule {
}
