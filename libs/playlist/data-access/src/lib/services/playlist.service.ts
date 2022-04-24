import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistResponse } from '@playlist/types';
import { UrlService } from '@utils/services';
import { Urls } from '@types';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  constructor(private httpClient: HttpClient, private urlService: UrlService) {}

  public getPlaylists(): Observable<PlaylistResponse> {
    return this.httpClient.get<PlaylistResponse>(
      this.urlService.getUrl(Urls.PLAYLIST)
    );
  }
}
