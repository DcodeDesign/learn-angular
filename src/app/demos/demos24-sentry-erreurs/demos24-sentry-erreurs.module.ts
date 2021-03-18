import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos24SentryErreursRoutingModule } from './demos24-sentry-erreurs-routing.module';
import { Demos24SentryErreursComponent } from './demos24-sentry-erreurs.component';


@NgModule({
  declarations: [Demos24SentryErreursComponent],
  imports: [
    CommonModule,
    Demos24SentryErreursRoutingModule
  ]
})
export class Demos24SentryErreursModule { }
