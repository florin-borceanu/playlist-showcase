import { ThemeService } from '@utils/services';

export function themeFactory(themeService: ThemeService): () => void {
  return () => themeService.setThemeOnStart();
}
