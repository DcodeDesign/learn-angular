import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos09PipesRoutingModule } from './demos09-pipes-routing.module';
import { Demos09PipesComponent } from './demos09-pipes.component';


@NgModule({
  declarations: [Demos09PipesComponent],
  imports: [
    CommonModule,
    Demos09PipesRoutingModule
  ]
})
export class Demos09PipesModule { }
