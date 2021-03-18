import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos15JwtRoutingModule } from './demos15-jwt-routing.module';
import { Demos15JwtComponent } from './demos15-jwt.component';


@NgModule({
  declarations: [Demos15JwtComponent],
  imports: [
    CommonModule,
    Demos15JwtRoutingModule
  ]
})
export class Demos15JwtModule { }
