import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppIntroComponent} from './app-intro.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {FourOfourComponent} from '../four-ofour/four-ofour.component';
import {AuthGuard} from './auth.guard';
import {EditComponent} from './edit/edit.component';

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
          {path: ':id/:name/edit', canDeactivate: [AuthGuard], component: EditComponent},
          {
            path: ':id/:name',
            component: UserComponent,
            data: {
              title: 'User List'
            },
            resolve: {
              user: AuthGuard
            }
          }
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
