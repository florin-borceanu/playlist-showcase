import { NavigationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

const applicationTitle = 'PlaylistShowcase';

@Injectable({ providedIn: 'root' })
export class ApplicationTitleService {
  constructor(private router: Router, private title: Title) {
    this.setTitle(this.computeName(this.router.url));

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setTitle(this.computeName(event.urlAfterRedirects));
      }
    });
  }

  public getTitle(): string {
    return this.title.getTitle();
  }

  public setTitle(title?: string): void {
    this.title.setTitle(`${applicationTitle} ${title ? `- ${title}` : ''}`);
  }

  private computeName(string: string): string {
    return this.toTitlecase(string.split('/')[1].split('?')[0]);
  }

  private toTitlecase(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
