import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { PlaylistResponse } from '@playlist/types';

const playlistActionPrefix = '[Playlist]';

export const loadPlaylists = createAction(
  `${playlistActionPrefix} Load playlists`
);

export const loadPlaylistsSuccess = createAction(
  `${playlistActionPrefix} Load playlists success`,
  props<{
    response: PlaylistResponse;
  }>()
);

export const loadPlaylistsFailure = createAction(
  `${playlistActionPrefix} Load playlists failure`,
  props<{ error: HttpErrorResponse }>()
);
