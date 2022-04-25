import { ThemeService } from '../services/theme';

export function themeFactory(themeService: ThemeService): () => void {
  return () => themeService.setThemeOnStart();
}
