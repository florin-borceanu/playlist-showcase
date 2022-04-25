import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationFacade } from '@core/data-access';
import { CoreMainRoutes } from '@types';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  constructor(
    private authenticationFacade: AuthenticationFacade,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.authenticationFacade.dispatchCheckLogin();
  }

  public logout(): void {
    this.authenticationFacade.dispatchLogout();
    this.router.navigate([CoreMainRoutes.LOGIN]);
  }
}
