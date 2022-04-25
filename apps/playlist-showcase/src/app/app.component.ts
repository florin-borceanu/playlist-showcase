import { Component, OnInit } from '@angular/core';
import { ThemeMode } from '@types';
import { ThemeService } from '@utils/services/theme';
import { UrlService } from '@utils/services/url';
import { environment } from '../environments/environment';

@Component({
  selector: 'playlist-showcase',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private theme: ThemeMode = this.themeService.theme$.getValue();

  constructor(
    private themeService: ThemeService,
    private urlService: UrlService
  ) {}

  public ngOnInit(): void {
    if (environment.production) {
      this.urlService.toggleProduction();
    }
  }

  public changeTheme(): void {
    this.theme =
      this.theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;

    this.themeService.setTheme(this.theme);
  }
}
