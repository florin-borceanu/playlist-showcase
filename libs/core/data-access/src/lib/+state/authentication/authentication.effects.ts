import * as AuthenticationActions from './authentication.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthenticationService } from '../../services';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '@core/types';
import { userDetails } from './authentication.selectors';

@Injectable()
export class AuthenticationEffects {
  checkLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.checkLogin),
      switchMap(() =>
        this.authenticationService.getLoginState().pipe(
          map((userDetails: UserDetails) => {
            if (userDetails) {
              return AuthenticationActions.checkLoginSuccess({ userDetails });
            }

            return AuthenticationActions.checkLoginFailure();
          })
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.login),
      switchMap(() => {
        return this.authenticationService.login().pipe(
          map((userDetails: UserDetails) =>
            AuthenticationActions.loginSuccess({
              userDetails,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(AuthenticationActions.loginFailure({ error }))
          )
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.logout),
      switchMap(() => {
        return this.authenticationService.logout().pipe(
          map(() => AuthenticationActions.logoutSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(AuthenticationActions.logoutFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {}
}
