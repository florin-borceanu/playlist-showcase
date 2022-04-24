import { PlaylistState, playlistFeatureKey } from './playlist.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Playlist } from '@playlist/types';

const getPlaylistState =
  createFeatureSelector<PlaylistState>(playlistFeatureKey);

export const isLoading = createSelector(
  getPlaylistState,
  (state: PlaylistState): boolean => state.isLoading
);

export const playlists = createSelector(
  getPlaylistState,
  (state: PlaylistState): Playlist[] => state.playlists
);
