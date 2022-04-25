import { Observable, delay, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '@types';
import { LocalStorageService } from '@utils/services/local-storage';
import { UserDetails } from '@core/types';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private mockUserDetails: UserDetails = {
    firstName: 'Florin',
    lastName: 'Borceanu',
    username: 'bflorin',
    photo:
      'https://media-exp1.licdn.com/dms/image/C4D03AQE2dMcAOc2dEg/profile-displayphoto-shrink_800_800/0/1567686018914?e=1656547200&v=beta&t=_lj2Fq2B4APNdWor9xmUKL9_WBewdUNSGkxJVpX-QqA',
  };

  constructor(private localStorageService: LocalStorageService) {}

  public login(): Observable<UserDetails> {
    this.localStorageService.setItem(
      LocalStorageKeys.LOGIN_KEY,
      this.mockUserDetails
    );

    return of(this.mockUserDetails).pipe(delay(500));
  }

  public logout(): Observable<boolean> {
    this.localStorageService.removeItem(LocalStorageKeys.LOGIN_KEY);

    return of(true);
  }

  public getLoginState(): Observable<UserDetails> {
    return of(
      (this.localStorageService.getItem(
        LocalStorageKeys.LOGIN_KEY
      ) as UserDetails) ?? null
    );
  }
}
