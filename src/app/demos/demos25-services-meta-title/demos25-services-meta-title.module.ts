import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos25ServicesMetaTitleRoutingModule } from './demos25-services-meta-title-routing.module';
import { Demos25ServicesMetaTitleComponent } from './demos25-services-meta-title.component';


@NgModule({
  declarations: [Demos25ServicesMetaTitleComponent],
  imports: [
    CommonModule,
    Demos25ServicesMetaTitleRoutingModule
  ]
})
export class Demos25ServicesMetaTitleModule { }
