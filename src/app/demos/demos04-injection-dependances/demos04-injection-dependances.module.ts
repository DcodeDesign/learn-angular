import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos04InjectionDependancesRoutingModule } from './demos04-injection-dependances-routing.module';
import { Demos04InjectionDependancesComponent } from './demos04-injection-dependances.component';
import { AddAlimentComponent } from './add-aliment/add-aliment.component';
import { ListAlimentComponent } from './list-aliment/list-aliment.component';
import {FormsModule} from '@angular/forms';
import {AlimentService} from './aliment.service';


@NgModule({
  declarations: [Demos04InjectionDependancesComponent, AddAlimentComponent, ListAlimentComponent],
  imports: [
    CommonModule,
    Demos04InjectionDependancesRoutingModule,
    FormsModule
  ],
  providers: [AlimentService]
})
export class Demos04InjectionDependancesModule { }
