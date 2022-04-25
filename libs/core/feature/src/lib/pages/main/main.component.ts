import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreMainRoutes } from '@types';
import { PlaylistService } from './main.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlaylistService],
})
export class MainComponent implements OnInit {
  public data$ = this.playlistService.data$;

  constructor(
    private router: Router,
    private playlistService: PlaylistService
  ) {}

  public ngOnInit(): void {
    this.playlistService.dispatchCheckLogin();
  }

  public logout(): void {
    this.playlistService.dispatchLogout();
    this.router.navigate([CoreMainRoutes.LOGIN]);
  }
}
