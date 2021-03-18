import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projet05FormulairesRoutingModule } from './projet05-formulaires-routing.module';
import { Projet05FormulairesComponent } from './projet05-formulaires.component';


@NgModule({
  declarations: [Projet05FormulairesComponent],
  imports: [
    CommonModule,
    Projet05FormulairesRoutingModule
  ]
})
export class Projet05FormulairesModule { }
