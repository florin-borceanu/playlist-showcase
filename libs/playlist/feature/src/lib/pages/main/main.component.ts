import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainService, PlaylistData } from './main.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MainService],
})
export class MainComponent implements OnInit {
  public data$: Observable<PlaylistData> = this.mainService.data$;

  constructor(private mainService: MainService) {}

  public ngOnInit(): void {
    this.mainService.dispatchLoadPlaylists();
  }
}
