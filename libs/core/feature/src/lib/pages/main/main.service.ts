import { Injectable } from '@angular/core';
import { AuthenticationFacade } from '@core/data-access';
import { UserDetails } from '@core/types';
import { userDetails } from 'libs/core/data-access/src/lib/+state/authentication/authentication.selectors';
import { combineLatest, map, Observable } from 'rxjs';

export interface PlaylistData {
  isLoading: boolean;
  userDetails: UserDetails | null;
}

@Injectable()
export class PlaylistService {
  public data$: Observable<PlaylistData> = combineLatest([
    this.authenticationFacade.isLoading$,
    this.authenticationFacade.userDetails$,
  ]).pipe(map(([isLoading, userDetails]) => ({ isLoading, userDetails })));

  constructor(private authenticationFacade: AuthenticationFacade) {}

  public dispatchCheckLogin(): void {
    this.authenticationFacade.dispatchCheckLogin();
  }

  public dispatchLogout(): void {
    this.authenticationFacade.dispatchLogout();
  }
}
