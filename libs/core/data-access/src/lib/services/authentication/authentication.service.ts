import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
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

  public login(): Observable<UserDetails> {
    return of(this.mockUserDetails);
  }
}
