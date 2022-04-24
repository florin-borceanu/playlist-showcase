import * as AuthenticationActions from './authentication.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import { AuthenticationService } from '../../services';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '@core/types';

@Injectable()
export class AuthenticationEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.login),
      switchMap(() =>
        this.authenticationService.login().pipe(
          delay(500),
          map((userDetails: UserDetails) =>
            AuthenticationActions.loginSuccess({
              userDetails,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(AuthenticationActions.loginFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {}
}
