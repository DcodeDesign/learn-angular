import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos16RxjsRoutingModule } from './demos16-rxjs-routing.module';
import { Demos16RxjsComponent } from './demos16-rxjs.component';


@NgModule({
  declarations: [Demos16RxjsComponent],
  imports: [
    CommonModule,
    Demos16RxjsRoutingModule
  ]
})
export class Demos16RxjsModule { }
