import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos05ObservableRoutingModule } from './demos05-observable-routing.module';
import { Demos05ObservableComponent } from './demos05-observable.component';


@NgModule({
  declarations: [Demos05ObservableComponent],
  imports: [
    CommonModule,
    Demos05ObservableRoutingModule
  ]
})
export class Demos05ObservableModule { }
