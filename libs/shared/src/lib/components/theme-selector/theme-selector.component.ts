import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
} from '@angular/core';
import { ThemeMode } from '@types';
import { ThemeService } from '@utils/services';

@Component({
  selector: 'shared-theme-selector',
  template: '',
  styleUrls: ['./theme-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent {
  @HostBinding('class') public get classes(): string {
    return [this.theme === ThemeMode.DARK ? 'dark' : '']
      .filter((className: string) => !!className.length)
      .join(' ');
  }

  private theme: ThemeMode = this.themeService.theme$.getValue();

  constructor(private themeService: ThemeService) {}

  @HostListener('click') public switchTheme(): void {
    this.theme = this.themeService.isDarkTheme$.getValue()
      ? ThemeMode.LIGHT
      : ThemeMode.DARK;
    this.themeService.setTheme(this.theme);
  }
}
