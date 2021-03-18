import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos26I18nRoutingModule } from './demos26-i18n-routing.module';
import { Demos26I18nComponent } from './demos26-i18n.component';


@NgModule({
  declarations: [Demos26I18nComponent],
  imports: [
    CommonModule,
    Demos26I18nRoutingModule
  ]
})
export class Demos26I18nModule { }
