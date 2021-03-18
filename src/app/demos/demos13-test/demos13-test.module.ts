import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos13TestRoutingModule } from './demos13-test-routing.module';
import { Demos13TestComponent } from './demos13-test.component';


@NgModule({
  declarations: [Demos13TestComponent],
  imports: [
    CommonModule,
    Demos13TestRoutingModule
  ]
})
export class Demos13TestModule { }
