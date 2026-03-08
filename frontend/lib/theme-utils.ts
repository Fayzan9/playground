/**
 * Theme Utilities
 * Functions for generating dynamic theme CSS based on color palettes
 */

import { colorPalettes, ColorPaletteName, ColorTokens } from "./color-palettes";

/**
 * Generate CSS custom properties for a color palette
 */
function generateColorTokensCSS(tokens: ColorTokens): string {
  return `
    --bg-primary: ${tokens.bgPrimary};
    --bg-secondary: ${tokens.bgSecondary};
    --bg-tertiary: ${tokens.bgTertiary};
    --text-primary: ${tokens.textPrimary};
    --text-secondary: ${tokens.textSecondary};
    --text-muted: ${tokens.textMuted};
    --accent: ${tokens.accent};
    --accent-hover: ${tokens.accentHover};
    --accent-light: ${tokens.accentLight};
    --border: ${tokens.border};
    --border-muted: ${tokens.borderMuted};

    /* Tailwind compatibility */
    --background: ${tokens.bgPrimary};
    --foreground: ${tokens.textPrimary};
    --card: ${tokens.bgSecondary};
    --card-foreground: ${tokens.textPrimary};
    --popover: ${tokens.bgSecondary};
    --popover-foreground: ${tokens.textPrimary};
    --primary: ${tokens.accent};
    --primary-foreground: #ffffff;
    --secondary: ${tokens.bgTertiary};
    --secondary-foreground: ${tokens.textPrimary};
    --muted: ${tokens.bgTertiary};
    --muted-foreground: ${tokens.textMuted};
    --ring: ${tokens.accent};
  `;
}

/**
 * Generate complete theme CSS for both light and dark modes
 */
export function generateThemeCSS(paletteName: ColorPaletteName): string {
  const palette = colorPalettes[paletteName];

  if (!palette) {
    console.warn(`Palette "${paletteName}" not found, using "indigo" as fallback`);
    return generateThemeCSS("indigo");
  }

  return `
    /* Theme: ${palette.name} - ${palette.description} */
    :root {
      ${generateColorTokensCSS(palette.light)}
    }

    .dark {
      ${generateColorTokensCSS(palette.dark)}
    }
  `;
}

/**
 * Get all available palette names
 */
export function getAvailablePalettes(): ColorPaletteName[] {
  return Object.keys(colorPalettes) as ColorPaletteName[];
}

/**
 * Get palette information
 */
export function getPaletteInfo(paletteName: ColorPaletteName) {
  return colorPalettes[paletteName];
}
