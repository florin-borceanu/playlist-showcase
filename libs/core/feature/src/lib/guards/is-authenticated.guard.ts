import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CoreMainRoutes } from '@types';
import { AuthenticationFacade } from '@core/data-access';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    private authenticationFacade: AuthenticationFacade,
    private router: Router
  ) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.authenticationFacade.isAuthenticated$.pipe(
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          return this.router.createUrlTree([CoreMainRoutes.LOGIN]);
        }

        return true;
      })
    );
  }

  public canActivateChild(): Observable<boolean | UrlTree> {
    return this.canActivate();
  }
}
