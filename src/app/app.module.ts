import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourOfourComponent } from './demos/demos07-routing/four-ofour/four-ofour.component';
import { PanierContainerComponent } from './projets/projet04-routing/components/panier-container/panier-container.component';
import { IngredientListComponent } from './projets/projet04-routing/components/panier-container/ingredient-list/ingredient-list.component';
import { CocktailFormComponent } from './projets/projet04-routing/components/cocktail-form/cocktail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FourOfourComponent,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
