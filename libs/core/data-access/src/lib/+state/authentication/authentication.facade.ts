import * as AuthenticationActions from './authentication.actions';
import * as AuthenticationSelectors from './authentication.selectors';
import { AuthenticationState } from './authentication.reducers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserDetails } from '@core/types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationFacade {
  public isAuthenticated$: Observable<boolean> = this.store.select(
    AuthenticationSelectors.isAuthenticated
  );

  public isLoading$: Observable<boolean> = this.store.select(
    AuthenticationSelectors.isLoading
  );

  public userDetails$: Observable<UserDetails | null> = this.store.select(
    AuthenticationSelectors.userDetails
  );

  constructor(private store: Store<AuthenticationState>) {}

  public dispatchCheckLogin(): void {
    this.store.dispatch(AuthenticationActions.checkLogin());
  }

  public dispatchLogin(): void {
    this.store.dispatch(AuthenticationActions.login());
  }

  public dispatchLogout(): void {
    this.store.dispatch(AuthenticationActions.logout());
  }
}
