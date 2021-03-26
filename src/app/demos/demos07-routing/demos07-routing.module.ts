import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Demos07RoutingRoutingModule} from './demos07-routing-routing.module';
import {Demos07RoutingComponent} from './demos07-routing.component';
import {AppIntroModule} from './app-intro/app-intro.module';

@NgModule({
  declarations: [
    Demos07RoutingComponent,
  ],
  imports: [
    CommonModule,
    Demos07RoutingRoutingModule,
    AppIntroModule,

  ]
})
export class Demos07RoutingModule {
}
