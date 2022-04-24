import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDetails } from '@core/types';

const authenticationActionPrefix = '[Authentication]';

export const login = createAction(`${authenticationActionPrefix} Login`);

export const loginSuccess = createAction(
  `${authenticationActionPrefix} Login success`,
  props<{
    userDetails: UserDetails;
  }>()
);

export const loginFailure = createAction(
  `${authenticationActionPrefix} Login failure`,
  props<{
    error: HttpErrorResponse;
  }>()
);

export const logout = createAction(`${authenticationActionPrefix} Logout`);
