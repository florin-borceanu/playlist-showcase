import { Observable, combineLatest, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Playlist } from '@playlist/types';
import { PlaylistFacade } from '@playlist/data-access';

export interface PlaylistData {
  isLoading: boolean;
  playlists: Playlist[];
}

@Injectable()
export class MainService {
  public data$: Observable<PlaylistData> = combineLatest([
    this.playlistFacade.isLoading$,
    this.playlistFacade.playlists$,
  ]).pipe(map(([isLoading, playlists]) => ({ isLoading, playlists })));

  constructor(private playlistFacade: PlaylistFacade) {}

  public dispatchLoadPlaylists(): void {
    this.playlistFacade.dispatchLoadPlaylists();
  }
}
