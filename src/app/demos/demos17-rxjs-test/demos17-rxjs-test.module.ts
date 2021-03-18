import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos17RxjsTestRoutingModule } from './demos17-rxjs-test-routing.module';
import { Demos17RxjsTestComponent } from './demos17-rxjs-test.component';


@NgModule({
  declarations: [Demos17RxjsTestComponent],
  imports: [
    CommonModule,
    Demos17RxjsTestRoutingModule
  ]
})
export class Demos17RxjsTestModule { }
