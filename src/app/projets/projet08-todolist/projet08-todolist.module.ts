import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet08TodolistRoutingModule } from './projet08-todolist-routing.module';
import { Projet08TodolistComponent } from './projet08-todolist.component';


@NgModule({
  declarations: [Projet08TodolistComponent],
  imports: [
    CommonModule,
    Projet08TodolistRoutingModule
  ]
})
export class Projet08TodolistModule { }
