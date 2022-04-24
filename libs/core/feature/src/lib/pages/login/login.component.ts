import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreMainRoutes } from '@types';
import { filter, Observable, tap } from 'rxjs';
import { LoginData, LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService],
})
export class LoginComponent {
  public data$: Observable<LoginData> = this.loginService.data$.pipe(
    tap((isAuthenticated) => {
      console.log(isAuthenticated);
      if (isAuthenticated) {
        this.router.navigate([CoreMainRoutes.DASHBOARD]);
      }
    })
  );

  constructor(private loginService: LoginService, private router: Router) {}

  public login(): void {
    this.loginService.dispatchLogin();
  }
}
