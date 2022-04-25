import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDetails } from '@core/types';

const authenticationActionPrefix = '[Authentication]';

export const checkLogin = createAction(
  `${authenticationActionPrefix} Check login`
);

export const checkLoginSuccess = createAction(
  `${authenticationActionPrefix} Check login success`,
  props<{
    userDetails: UserDetails;
  }>()
);

export const checkLoginFailure = createAction(
  `${authenticationActionPrefix} Check login failure`
);

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

export const logoutSuccess = createAction(
  `${authenticationActionPrefix} Logout success`
);

export const logoutFailure = createAction(
  `${authenticationActionPrefix} Logout failure`,
  props<{
    error: HttpErrorResponse;
  }>()
);
