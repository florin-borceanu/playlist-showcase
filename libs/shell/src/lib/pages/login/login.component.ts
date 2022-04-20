import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY, delay, first, of } from 'rxjs';
import { AuthenticationService } from '../../services';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authenticationService: AuthenticationService) {}

  public login(): void {
    of(EMPTY)
      .pipe(delay(1000), first())
      .subscribe(() => this.authenticationService.login());
  }
}
