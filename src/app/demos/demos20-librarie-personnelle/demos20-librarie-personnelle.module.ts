import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos20LibrariePersonnelleRoutingModule } from './demos20-librarie-personnelle-routing.module';
import { Demos20LibrariePersonnelleComponent } from './demos20-librarie-personnelle.component';


@NgModule({
  declarations: [Demos20LibrariePersonnelleComponent],
  imports: [
    CommonModule,
    Demos20LibrariePersonnelleRoutingModule
  ]
})
export class Demos20LibrariePersonnelleModule { }
