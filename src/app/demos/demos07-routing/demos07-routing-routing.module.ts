import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos07RoutingComponent } from './demos07-routing.component';
import {HomepageComponent} from './app-intro/homepage/homepage.component';
import {UsersComponent} from './app-intro/users/users.component';
import {AppIntroComponent} from './app-intro/app-intro.component';
import {UserComponent} from './app-intro/user/user.component';

const routes: Routes = [
    { path: '', component: Demos07RoutingComponent,
      children: [
        {path: '', loadChildren: () => import('./app-intro/app-intro.module').then(m => m.AppIntroModule)
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos07RoutingRoutingModule { }
