import * as PlaylistActions from './playlist.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Playlist } from '@playlist/types';

export const playlistFeatureKey = 'playlist';

export interface PlaylistState {
  error: HttpErrorResponse | null;
  isLoading: boolean;
  playlists: Playlist[];
}

export const initialState: PlaylistState = {
  error: null,
  isLoading: false,
  playlists: [],
};

const playlistReducer = createReducer(
  initialState,
  on(PlaylistActions.loadPlaylists, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PlaylistActions.loadPlaylistsSuccess, (state, { response }) => ({
    ...state,
    isLoading: false,
    playlists: response?.featuredPlaylists?.content ?? [],
  })),
  on(PlaylistActions.loadPlaylistsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function reducer(state: PlaylistState | undefined, action: Action) {
  return playlistReducer(state, action);
}
