import { Injectable } from '@angular/core';
import { LocalStorageKeys, THEME_BODY_CLASS, ThemeMode } from '@types';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public theme$: BehaviorSubject<ThemeMode> = new BehaviorSubject<ThemeMode>(
    ThemeMode.SYSTEM
  );
  public isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private get isDarkTheme(): boolean {
    return (
      this.theme$.getValue() === ThemeMode.DARK ||
      (this.theme$.getValue() === ThemeMode.SYSTEM &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }

  constructor(private localStorageService: LocalStorageService) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        this.isDarkTheme$.next(this.isDarkTheme);
      });
  }

  public setTheme(theme: ThemeMode): void {
    this.clearBodyThemeClass();
    this.addBodyThemeClass(theme);

    this.localStorageService.setItem(LocalStorageKeys.THEME, theme);
    this.theme$.next(theme);
    this.isDarkTheme$.next(this.isDarkTheme);
  }

  public setThemeOnStart(): void {
    const theme: ThemeMode = (this.localStorageService.getItem(
      LocalStorageKeys.THEME
    ) ?? ThemeMode.SYSTEM) as ThemeMode;

    this.setTheme(theme || ThemeMode.LIGHT);
  }

  private clearBodyThemeClass(): void {
    Object.values(THEME_BODY_CLASS).forEach((themeBodyClass: string) => {
      document.body.classList.remove(themeBodyClass);
    });
  }

  private addBodyThemeClass(theme: ThemeMode): void {
    document.body.classList.add(THEME_BODY_CLASS[theme]);
  }
}

export function themeFactory(themeService: ThemeService): () => void {
  return () => themeService.setThemeOnStart();
}
