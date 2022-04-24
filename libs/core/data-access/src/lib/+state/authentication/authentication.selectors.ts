import {
  AuthenticationState,
  authenticationFeatureKey,
} from './authentication.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserDetails } from '@core/types';

const getAuthenticationState = createFeatureSelector<AuthenticationState>(
  authenticationFeatureKey
);

export const isAuthenticated = createSelector(
  getAuthenticationState,
  (state: AuthenticationState): boolean => state.isAuthenticated
);

export const isLoading = createSelector(
  getAuthenticationState,
  (state: AuthenticationState): boolean => state.isLoading
);

export const userDetails = createSelector(
  getAuthenticationState,
  (state: AuthenticationState): UserDetails | null => state.userDetails
);
