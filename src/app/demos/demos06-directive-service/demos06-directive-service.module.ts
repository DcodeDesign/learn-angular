import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos06DirectiveServiceRoutingModule } from './demos06-directive-service-routing.module';
import { Demos06DirectiveServiceComponent } from './demos06-directive-service.component';


@NgModule({
  declarations: [Demos06DirectiveServiceComponent],
  imports: [
    CommonModule,
    Demos06DirectiveServiceRoutingModule
  ]
})
export class Demos06DirectiveServiceModule { }
