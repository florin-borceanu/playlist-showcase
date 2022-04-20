import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShellMainRoutes } from '@types';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public isAuthenticated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public get isAuthenticated(): boolean {
    return this.isAuthenticated$.getValue();
  }

  constructor(private router: Router) {}

  public login(): void {
    this.isAuthenticated$.next(true);
    this.router.navigate(['']);
  }

  public logout(): void {
    this.isAuthenticated$.next(false);
    this.router.navigate([ShellMainRoutes.LOGIN]);
  }
}
