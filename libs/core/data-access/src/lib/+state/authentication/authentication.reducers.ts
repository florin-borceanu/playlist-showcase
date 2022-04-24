import * as AuthenticationActions from './authentication.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDetails } from '@core/types';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  error: HttpErrorResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  userDetails: UserDetails | null;
}

export const initialState: AuthenticationState = {
  error: null,
  isAuthenticated: false,
  isLoading: false,
  userDetails: null,
};

const authenticationReducer = createReducer(
  initialState,
  on(AuthenticationActions.login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthenticationActions.loginSuccess, (state, { userDetails }) => ({
    ...state,
    isAuthenticated: true,
    isLoading: false,
    userDetails,
  })),
  on(AuthenticationActions.loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(AuthenticationActions.logout, () => ({
    ...initialState,
  }))
);

export function reducer(
  state: AuthenticationState | undefined,
  action: Action
) {
  return authenticationReducer(state, action);
}
