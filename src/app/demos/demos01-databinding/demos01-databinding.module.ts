import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Demos01DatabindingRoutingModule} from './demos01-databinding-routing.module';
import {Demos01DatabindingComponent} from './demos01-databinding.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {LiaisonDeProprietesComponent} from './liaison-de-proprietes/liaison-de-proprietes.component';
import {LiaisonEvenementComponent} from './liaison-evenement/liaison-evenement.component';
import {DoubleDataBindingComponent} from './double-data-binding/double-data-binding.component';
import {FormsModule} from '@angular/forms';
import {DirectivesComponent} from './directives/directives.component';
import { IfComponent } from './if/if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { ForComponent } from './for/for.component';


@NgModule({
  declarations: [
    Demos01DatabindingComponent,
    InterpolationComponent,
    LiaisonDeProprietesComponent,
    LiaisonEvenementComponent,
    DoubleDataBindingComponent,
    DirectivesComponent,
    IfComponent,
    NgStyleComponent,
    NgClassComponent,
    ForComponent],
  imports: [
    CommonModule,
    Demos01DatabindingRoutingModule,
    FormsModule
  ]
})
export class Demos01DatabindingModule {
}
