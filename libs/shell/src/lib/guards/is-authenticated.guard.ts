import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services';
import { Injectable } from '@angular/core';
import { ShellMainRoutes } from '@types';

@Injectable({ providedIn: 'root' })
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  public canActivate(): Observable<boolean> {
    if (!this.authenticationService.isAuthenticated) {
      this.router.navigate([ShellMainRoutes.LOGIN]);
    }

    return of(true);
  }

  public canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
