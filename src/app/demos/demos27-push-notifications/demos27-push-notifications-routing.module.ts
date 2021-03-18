import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos27PushNotificationsComponent } from './demos27-push-notifications.component';

const routes: Routes = [{ path: '', component: Demos27PushNotificationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos27PushNotificationsRoutingModule { }
