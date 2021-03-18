import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos02ComposantsRoutingModule } from './demos02-composants-routing.module';
import { Demos02ComposantsComponent } from './demos02-composants.component';
import {FormsModule} from '@angular/forms';
import { FruitComponent } from './fruit/fruit.component';
import {ContentchildComponent} from './contentchild/contentchild.component';
import { HookComponent } from './hook/hook.component';

@NgModule({
  declarations: [Demos02ComposantsComponent, FruitComponent,  ContentchildComponent, HookComponent],
  imports: [
    CommonModule,
    Demos02ComposantsRoutingModule,
    FormsModule
  ]
})
export class Demos02ComposantsModule { }
