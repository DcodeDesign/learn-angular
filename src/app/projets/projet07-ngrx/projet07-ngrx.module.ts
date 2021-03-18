import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet07NgrxRoutingModule } from './projet07-ngrx-routing.module';
import { Projet07NgrxComponent } from './projet07-ngrx.component';


@NgModule({
  declarations: [Projet07NgrxComponent],
  imports: [
    CommonModule,
    Projet07NgrxRoutingModule
  ]
})
export class Projet07NgrxModule { }
