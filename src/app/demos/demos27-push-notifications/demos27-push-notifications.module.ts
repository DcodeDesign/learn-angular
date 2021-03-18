import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos27PushNotificationsRoutingModule } from './demos27-push-notifications-routing.module';
import { Demos27PushNotificationsComponent } from './demos27-push-notifications.component';


@NgModule({
  declarations: [Demos27PushNotificationsComponent],
  imports: [
    CommonModule,
    Demos27PushNotificationsRoutingModule
  ]
})
export class Demos27PushNotificationsModule { }
