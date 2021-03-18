import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos03DirectivesRoutingModule } from './demos03-directives-routing.module';
import { Demos03DirectivesComponent } from './demos03-directives.component';

import {ColorDirective} from './directives/color.directive';
import {ClickDirective} from './directives/click.directive';
import {AddClassDirective} from './directives/addClass.directive';
import {ChangeColorDirective} from './directives/changeColor.directive';
import {IfDirective} from './directives/if.directive';


@NgModule({
  declarations: [Demos03DirectivesComponent, ColorDirective, ClickDirective, AddClassDirective, ChangeColorDirective, IfDirective],
  imports: [
    CommonModule,
    Demos03DirectivesRoutingModule
  ]
})
export class Demos03DirectivesModule { }
