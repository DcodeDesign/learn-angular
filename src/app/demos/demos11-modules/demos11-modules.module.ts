import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos11ModulesRoutingModule } from './demos11-modules-routing.module';
import { Demos11ModulesComponent } from './demos11-modules.component';


@NgModule({
  declarations: [Demos11ModulesComponent],
  imports: [
    CommonModule,
    Demos11ModulesRoutingModule
  ]
})
export class Demos11ModulesModule { }
