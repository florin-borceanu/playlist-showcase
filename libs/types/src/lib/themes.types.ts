export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export const THEME_BODY_CLASS: Record<ThemeMode, string> = {
  [ThemeMode.DARK]: 'theme--dark',
  [ThemeMode.LIGHT]: 'theme--light',
  [ThemeMode.SYSTEM]: 'theme--system',
};
