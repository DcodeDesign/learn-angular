import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {EditComponent} from './edit/edit.component';
import {User} from './users/users.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<EditComponent>, Resolve<User> {
  /* canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return undefined;
   }*/
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    return true;
  }

  /* canActivateChild(childRoute: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return undefined;
   } */

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean {
    return true;
  }

  canDeactivate(component: EditComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
    return component.canDeactivate();
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): User {
    const userId = route.paramMap.get('id');
    return {
      id: 5,
      name: 'Milou'
    };
  }
}
