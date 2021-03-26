import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppIntroComponent} from './app-intro.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: '', component: AppIntroComponent, pathMatch: 'full',
    children: [
      {path: '', component: HomepageComponent, pathMatch: 'prefix'},
    ]
  },

  {
    path: 'homepage', component: AppIntroComponent, pathMatch: 'full',
    children: [
      {path: '', component: HomepageComponent, pathMatch: 'prefix'},
    ]
  },

  {
    path: 'users', component: AppIntroComponent, pathMatch: 'full',
    children: [
      {path: '', component: UsersComponent, pathMatch: 'prefix'},
    ]
  },
  {
    path: 'users/:id/:name', component: AppIntroComponent, pathMatch: 'full',
    children: [
      {path: '', component: UserComponent, pathMatch: 'prefix'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppIntroRoutingModule {
}
