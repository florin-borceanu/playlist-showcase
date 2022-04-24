import * as PlaylistActions from './playlist.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaylistResponse } from '@playlist/types';
import { PlaylistService } from '../services';

@Injectable()
export class PlaylistEffects {
  loadPlaylists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlaylistActions.loadPlaylists),
      switchMap(() =>
        this.playlistService.getPlaylists().pipe(
          map((response: PlaylistResponse) =>
            PlaylistActions.loadPlaylistsSuccess({ response })
          ),
          catchError((error: HttpErrorResponse) =>
            of(PlaylistActions.loadPlaylistsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private playlistService: PlaylistService
  ) {}
}
