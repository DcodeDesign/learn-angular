import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppIntroComponent} from './app-intro.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {FourOfourComponent} from '../four-ofour/four-ofour.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '', component: AppIntroComponent, pathMatch: 'prefix',
    children: [
      {path: '', component: HomepageComponent},
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          {path: ':id/:name', component: UserComponent}
        ]
      }
    ]
  },
  {path: '**', component: FourOfourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppIntroRoutingModule {
}
