import * as fromPlaylist from './+state/playlist.reducers';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { PlaylistEffects } from './+state/playlist.effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([PlaylistEffects]),
    StoreModule.forFeature(
      fromPlaylist.playlistFeatureKey,
      fromPlaylist.reducer
    ),
  ],
})
export class PlaylistDataAccessModule {}
