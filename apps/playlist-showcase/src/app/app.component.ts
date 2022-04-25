import { Component, OnInit } from '@angular/core';
import { UrlService } from '@utils/services';
import { environment } from '../environments/environment';

@Component({
  selector: 'playlist-showcase',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private urlService: UrlService) {}

  public ngOnInit(): void {
    if (environment.production) {
      this.urlService.toggleProduction();
    }
  }
}
