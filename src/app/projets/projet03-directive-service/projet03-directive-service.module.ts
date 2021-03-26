import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Projet03DirectiveServiceRoutingModule} from './projet03-directive-service-routing.module';
import {Projet03DirectiveServiceComponent} from './projet03-directive-service.component';
import {Header03Component} from './components/header03/header03.component';
import {Cocktail03ListComponent} from './components/cocktail02-container/cocktail03-list/cocktail03-list.component';
import {Cocktail03DetailComponent} from './components/cocktail02-container/cocktail03-detail/cocktail03-detail.component';
import {Cocktail02ContainerComponent} from './components/cocktail02-container/cocktail02-container.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    Projet03DirectiveServiceComponent,
    Header03Component,
    Cocktail03ListComponent,
    Cocktail03DetailComponent,
    Cocktail02ContainerComponent,
    SelectedDirective],
  imports: [
    CommonModule,
    Projet03DirectiveServiceRoutingModule,
    FormsModule
  ]
})
export class Projet03DirectiveServiceModule {
}
