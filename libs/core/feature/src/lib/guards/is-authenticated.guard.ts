import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CoreMainRoutes } from '@types';
import { AuthenticationFacade } from '@core/data-access';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedGuard implements CanActivateChild {
  constructor(
    private authenticationFacade: AuthenticationFacade,
    private router: Router
  ) {}

  public canActivateChild(): Observable<boolean | UrlTree> {
    return this.authenticationFacade.isAuthenticated$.pipe(
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          return this.router.createUrlTree([CoreMainRoutes.LOGIN]);
        }

        return true;
      })
    );
  }
}
