import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos12AnimationsRoutingModule } from './demos12-animations-routing.module';
import { Demos12AnimationsComponent } from './demos12-animations.component';


@NgModule({
  declarations: [Demos12AnimationsComponent],
  imports: [
    CommonModule,
    Demos12AnimationsRoutingModule
  ]
})
export class Demos12AnimationsModule { }
