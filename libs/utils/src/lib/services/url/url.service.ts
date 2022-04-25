import { Injectable } from '@angular/core';
import { Urls } from '@types';

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
  private isProduction = false;

  public getUrl(url: Urls) {
    return urlMapping[url][this.isProduction ? 'prod' : 'dev'];
  }

  public toggleProduction(): void {
    this.isProduction = !this.isProduction;
  }
}
