import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet03DirectiveServiceRoutingModule } from './projet03-directive-service-routing.module';
import { Projet03DirectiveServiceComponent } from './projet03-directive-service.component';


@NgModule({
  declarations: [Projet03DirectiveServiceComponent],
  imports: [
    CommonModule,
    Projet03DirectiveServiceRoutingModule
  ]
})
export class Projet03DirectiveServiceModule { }
