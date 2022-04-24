import * as PlaylistActions from './playlist.actions';
import * as PlaylistSelectors from './playlist.selectors';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '@playlist/types';
import { PlaylistState } from './playlist.reducers';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class PlaylistFacade {
  public isLoading$: Observable<boolean> = this.store.select(
    PlaylistSelectors.isLoading
  );

  public playlists$: Observable<Playlist[]> = this.store.select(
    PlaylistSelectors.playlists
  );

  constructor(private store: Store<PlaylistState>) {}

  public dispatchLoadPlaylists(): void {
    this.store.dispatch(PlaylistActions.loadPlaylists());
  }
}
