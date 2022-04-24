import { Injectable } from '@angular/core';
import { AuthenticationFacade } from '@core/data-access';
import { combineLatest, map, Observable } from 'rxjs';

export interface LoginData {
  isAuthenticated: boolean;
  isLoading: boolean;
}

@Injectable()
export class LoginService {
  public data$: Observable<LoginData> = combineLatest([
    this.authenticationFacade.isAuthenticated$,
    this.authenticationFacade.isLoading$,
  ]).pipe(
    map(([isAuthenticated, isLoading]) => ({ isAuthenticated, isLoading }))
  );

  constructor(private authenticationFacade: AuthenticationFacade) {}

  public dispatchLogin(): void {
    this.authenticationFacade.dispatchLogin();
  }
}
