import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet01CocktailsRoutingModule } from './projet01-cocktails-routing.module';
import { Projet01CocktailsComponent } from './projet01-cocktails.component';
import {HeaderComponent} from './components/header/header.component';
import {CocktailListComponent} from './components/cocktail-list/cocktail-list.component';
import {CocktailDetailComponent} from './components/cocktail-detail/cocktail-detail.component';


@NgModule({
  declarations: [
    Projet01CocktailsComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    CocktailDetailComponent
  ],
  imports: [
    CommonModule,
    Projet01CocktailsRoutingModule
  ]
})
export class Projet01CocktailsModule { }
