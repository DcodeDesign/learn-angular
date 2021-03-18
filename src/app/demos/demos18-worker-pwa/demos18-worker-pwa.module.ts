import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos18WorkerPwaRoutingModule } from './demos18-worker-pwa-routing.module';
import { Demos18WorkerPwaComponent } from './demos18-worker-pwa.component';


@NgModule({
  declarations: [Demos18WorkerPwaComponent],
  imports: [
    CommonModule,
    Demos18WorkerPwaRoutingModule
  ]
})
export class Demos18WorkerPwaModule { }
