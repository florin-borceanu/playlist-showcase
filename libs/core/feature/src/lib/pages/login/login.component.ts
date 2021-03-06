import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreMainRoutes } from '@types';
import { Observable, tap } from 'rxjs';
import { LoginData, LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  public data$: Observable<LoginData> = this.loginService.data$.pipe(
    tap(({ isAuthenticated }) => {
      if (isAuthenticated) {
        this.router.navigate([CoreMainRoutes.PLAYLIST]);
      }
    })
  );

  constructor(private loginService: LoginService, private router: Router) {}

  public ngOnInit(): void {
    this.loginService.dispatchCheckLogin();
  }

  public login(): void {
    this.loginService.dispatchLogin();
  }
}
