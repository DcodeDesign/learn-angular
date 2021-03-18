import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos19UniversalRoutingModule } from './demos19-universal-routing.module';
import { Demos19UniversalComponent } from './demos19-universal.component';


@NgModule({
  declarations: [Demos19UniversalComponent],
  imports: [
    CommonModule,
    Demos19UniversalRoutingModule
  ]
})
export class Demos19UniversalModule { }
