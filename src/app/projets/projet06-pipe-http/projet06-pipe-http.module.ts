import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet06PipeHttpRoutingModule } from './projet06-pipe-http-routing.module';
import { Projet06PipeHttpComponent } from './projet06-pipe-http.component';


@NgModule({
  declarations: [Projet06PipeHttpComponent],
  imports: [
    CommonModule,
    Projet06PipeHttpRoutingModule
  ]
})
export class Projet06PipeHttpModule { }
