import { Injectable } from '@angular/core';
import { Urls } from '@types';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { environment } from 'apps/playlist-showcase/src/environments/environment';

interface Url {
  dev: string;
  prod: string;
}

const urlMapping: Record<Urls, Url> = {
  [Urls.PLAYLIST]: {
    dev: 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json',
    prod: '',
  },
};

@Injectable({ providedIn: 'root' })
export class UrlService {
  public getUrl(url: Urls) {
    return urlMapping[url][environment.production ? 'prod' : 'dev'];
  }
}
