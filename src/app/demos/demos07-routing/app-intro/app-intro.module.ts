import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppIntroRoutingModule } from './app-intro-routing.module';
import { AppIntroComponent } from './app-intro.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UsersComponent} from './users/users.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
    declarations: [AppIntroComponent, HomepageComponent, UsersComponent, UserComponent, EditComponent],
    exports: [
        AppIntroComponent
    ],
  imports: [
    CommonModule,
    AppIntroRoutingModule
  ]
})
export class AppIntroModule { }
