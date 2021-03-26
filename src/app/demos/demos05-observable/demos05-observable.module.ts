import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos05ObservableRoutingModule } from './demos05-observable-routing.module';
import { Demos05ObservableComponent } from './demos05-observable.component';
import { ObservableObserverComponent } from './observable-observer/observable-observer.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { OperateursPipesRxjsComponent } from './operateurs-pipes-rxjs/operateurs-pipes-rxjs.component';


@NgModule({
  declarations: [Demos05ObservableComponent, ObservableObserverComponent, SubjectsComponent, OperateursPipesRxjsComponent],
  imports: [
    CommonModule,
    Demos05ObservableRoutingModule
  ]
})
export class Demos05ObservableModule { }
