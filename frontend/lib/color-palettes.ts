/**
 * Color Palettes - 13 Professionally Crafted Themes
 * Each palette includes complete light and dark mode support
 */

export interface ColorTokens {
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentLight: string;
  border: string;
  borderMuted: string;
}

export interface ColorPalette {
  name: string;
  description: string;
  light: ColorTokens;
  dark: ColorTokens;
}

export type ColorPaletteName =
  | "indigo"
  | "ocean"
  | "sunset"
  | "purple"
  | "emerald"
  | "rose"
  | "slate"
  | "cyber"
  | "dracula"
  | "nord"
  | "material"
  | "github"
  | "mint";

export const colorPalettes: Record<ColorPaletteName, ColorPalette> = {
  // 1. Professional Indigo (Default)
  indigo: {
    name: "Professional Indigo",
    description: "Clean, professional look with indigo accents",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F8F9FA",
      bgTertiary: "#F1F3F5",
      textPrimary: "#1A1D29",
      textSecondary: "#4A5568",
      textMuted: "#9CA3AF",
      accent: "#6366F1",
      accentHover: "#4F46E5",
      accentLight: "#818CF8",
      border: "#E5E7EB",
      borderMuted: "#F3F4F6",
    },
    dark: {
      bgPrimary: "#0A0A0A",
      bgSecondary: "#161A23",
      bgTertiary: "#1F2937",
      textPrimary: "#F9FAFB",
      textSecondary: "#D1D5DB",
      textMuted: "#6B7280",
      accent: "#818CF8",
      accentHover: "#6366F1",
      accentLight: "#A5B4FC",
      border: "#374151",
      borderMuted: "#1F2937",
    },
  },

  // 2. Ocean Blue
  ocean: {
    name: "Ocean Blue",
    description: "Refreshing ocean-inspired teal and cyan tones",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F0FDFA",
      bgTertiary: "#CCFBF1",
      textPrimary: "#134E4A",
      textSecondary: "#0F766E",
      textMuted: "#5EEAD4",
      accent: "#14B8A6",
      accentHover: "#0D9488",
      accentLight: "#2DD4BF",
      border: "#99F6E4",
      borderMuted: "#CCFBF1",
    },
    dark: {
      bgPrimary: "#042F2E",
      bgSecondary: "#134E4A",
      bgTertiary: "#115E59",
      textPrimary: "#F0FDFA",
      textSecondary: "#99F6E4",
      textMuted: "#5EEAD4",
      accent: "#2DD4BF",
      accentHover: "#5EEAD4",
      accentLight: "#99F6E4",
      border: "#115E59",
      borderMuted: "#134E4A",
    },
  },

  // 3. Sunset Warmth
  sunset: {
    name: "Sunset Warmth",
    description: "Warm and inviting amber and orange hues",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#FFFBEB",
      bgTertiary: "#FEF3C7",
      textPrimary: "#78350F",
      textSecondary: "#92400E",
      textMuted: "#D97706",
      accent: "#F59E0B",
      accentHover: "#D97706",
      accentLight: "#FBBF24",
      border: "#FDE68A",
      borderMuted: "#FEF3C7",
    },
    dark: {
      bgPrimary: "#451A03",
      bgSecondary: "#78350F",
      bgTertiary: "#92400E",
      textPrimary: "#FFFBEB",
      textSecondary: "#FDE68A",
      textMuted: "#FCD34D",
      accent: "#FBBF24",
      accentHover: "#FCD34D",
      accentLight: "#FDE68A",
      border: "#92400E",
      borderMuted: "#78350F",
    },
  },

  // 4. Royal Purple
  purple: {
    name: "Royal Purple",
    description: "Bold and creative purple gradient",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#FAF5FF",
      bgTertiary: "#F3E8FF",
      textPrimary: "#581C87",
      textSecondary: "#7C3AED",
      textMuted: "#A78BFA",
      accent: "#A855F7",
      accentHover: "#9333EA",
      accentLight: "#C084FC",
      border: "#E9D5FF",
      borderMuted: "#F3E8FF",
    },
    dark: {
      bgPrimary: "#3B0764",
      bgSecondary: "#581C87",
      bgTertiary: "#6B21A8",
      textPrimary: "#FAF5FF",
      textSecondary: "#E9D5FF",
      textMuted: "#D8B4FE",
      accent: "#C084FC",
      accentHover: "#D8B4FE",
      accentLight: "#E9D5FF",
      border: "#6B21A8",
      borderMuted: "#581C87",
    },
  },

  // 5. Emerald Fresh
  emerald: {
    name: "Emerald Fresh",
    description: "Natural and energetic emerald green",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#ECFDF5",
      bgTertiary: "#D1FAE5",
      textPrimary: "#064E3B",
      textSecondary: "#047857",
      textMuted: "#6EE7B7",
      accent: "#10B981",
      accentHover: "#059669",
      accentLight: "#34D399",
      border: "#A7F3D0",
      borderMuted: "#D1FAE5",
    },
    dark: {
      bgPrimary: "#022C22",
      bgSecondary: "#064E3B",
      bgTertiary: "#065F46",
      textPrimary: "#ECFDF5",
      textSecondary: "#A7F3D0",
      textMuted: "#6EE7B7",
      accent: "#34D399",
      accentHover: "#6EE7B7",
      accentLight: "#A7F3D0",
      border: "#065F46",
      borderMuted: "#064E3B",
    },
  },

  // 6. Modern Rose
  rose: {
    name: "Modern Rose",
    description: "Elegant rose and pink tones",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#FFF1F2",
      bgTertiary: "#FFE4E6",
      textPrimary: "#881337",
      textSecondary: "#BE123C",
      textMuted: "#FB7185",
      accent: "#F43F5E",
      accentHover: "#E11D48",
      accentLight: "#FB7185",
      border: "#FECDD3",
      borderMuted: "#FFE4E6",
    },
    dark: {
      bgPrimary: "#4C0519",
      bgSecondary: "#881337",
      bgTertiary: "#9F1239",
      textPrimary: "#FFF1F2",
      textSecondary: "#FECDD3",
      textMuted: "#FDA4AF",
      accent: "#FB7185",
      accentHover: "#FDA4AF",
      accentLight: "#FECDD3",
      border: "#9F1239",
      borderMuted: "#881337",
    },
  },

  // 7. Minimal Slate
  slate: {
    name: "Minimal Slate",
    description: "Clean monochrome with subtle blue undertones",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F8FAFC",
      bgTertiary: "#F1F5F9",
      textPrimary: "#0F172A",
      textSecondary: "#475569",
      textMuted: "#94A3B8",
      accent: "#334155",
      accentHover: "#1E293B",
      accentLight: "#64748B",
      border: "#E2E8F0",
      borderMuted: "#F1F5F9",
    },
    dark: {
      bgPrimary: "#020617",
      bgSecondary: "#0F172A",
      bgTertiary: "#1E293B",
      textPrimary: "#F8FAFC",
      textSecondary: "#CBD5E1",
      textMuted: "#64748B",
      accent: "#94A3B8",
      accentHover: "#CBD5E1",
      accentLight: "#E2E8F0",
      border: "#334155",
      borderMuted: "#1E293B",
    },
  },

  // 8. Cyber Neon
  cyber: {
    name: "Cyber Neon",
    description: "High-contrast cyberpunk aesthetic with neon accents",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#FDF4FF",
      bgTertiary: "#FAE8FF",
      textPrimary: "#3B0764",
      textSecondary: "#701A75",
      textMuted: "#C026D3",
      accent: "#EC4899",
      accentHover: "#DB2777",
      accentLight: "#F472B6",
      border: "#F5D0FE",
      borderMuted: "#FAE8FF",
    },
    dark: {
      bgPrimary: "#0A0118",
      bgSecondary: "#1A0B2E",
      bgTertiary: "#2D1B4E",
      textPrimary: "#F5F3FF",
      textSecondary: "#E9D5FF",
      textMuted: "#D8B4FE",
      accent: "#FF00FF",
      accentHover: "#FF3FFF",
      accentLight: "#FF7FFF",
      border: "#4C1D95",
      borderMuted: "#2D1B4E",
    },
  },

  // 9. Dracula
  dracula: {
    name: "Dracula",
    description: "Dark editor style palette with purple and pink accents",
    light: {
      bgPrimary: "#F8F8F2",
      bgSecondary: "#EEEEE8",
      bgTertiary: "#E4E4DE",
      textPrimary: "#282A36",
      textSecondary: "#44475A",
      textMuted: "#6272A4",
      accent: "#BD93F9",
      accentHover: "#9580E5",
      accentLight: "#D5BDFF",
      border: "#CFCFC2",
      borderMuted: "#E4E4DE",
    },
    dark: {
      bgPrimary: "#282A36",
      bgSecondary: "#44475A",
      bgTertiary: "#6272A4",
      textPrimary: "#F8F8F2",
      textSecondary: "#E6E6E0",
      textMuted: "#CFCFC2",
      accent: "#FF79C6",
      accentHover: "#FF92D0",
      accentLight: "#FFB3E6",
      border: "#6272A4",
      borderMuted: "#44475A",
    },
  },

  // 10. Nord Arctic
  nord: {
    name: "Nord Arctic",
    description: "Calm nordic palette with cool blues and subtle contrast",
    light: {
      bgPrimary: "#ECEFF4",
      bgSecondary: "#E5E9F0",
      bgTertiary: "#D8DEE9",
      textPrimary: "#2E3440",
      textSecondary: "#434C5E",
      textMuted: "#4C566A",
      accent: "#5E81AC",
      accentHover: "#5273A1",
      accentLight: "#81A1C1",
      border: "#D8DEE9",
      borderMuted: "#E5E9F0",
    },
    dark: {
      bgPrimary: "#2E3440",
      bgSecondary: "#3B4252",
      bgTertiary: "#434C5E",
      textPrimary: "#ECEFF4",
      textSecondary: "#D8DEE9",
      textMuted: "#E5E9F0",
      accent: "#81A1C1",
      accentHover: "#88C0D0",
      accentLight: "#8FBCBB",
      border: "#4C566A",
      borderMuted: "#434C5E",
    },
  },

  // 11. Material Blue
  material: {
    name: "Material Blue",
    description: "Clean material design blue palette",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F5F5F5",
      bgTertiary: "#EEEEEE",
      textPrimary: "#212121",
      textSecondary: "#757575",
      textMuted: "#9E9E9E",
      accent: "#3F51B5",
      accentHover: "#303F9F",
      accentLight: "#7986CB",
      border: "#E0E0E0",
      borderMuted: "#F5F5F5",
    },
    dark: {
      bgPrimary: "#121212",
      bgSecondary: "#1E1E1E",
      bgTertiary: "#2C2C2C",
      textPrimary: "#FFFFFF",
      textSecondary: "#B3B3B3",
      textMuted: "#808080",
      accent: "#3F51B5",
      accentHover: "#5C6BC0",
      accentLight: "#7986CB",
      border: "#424242",
      borderMuted: "#2C2C2C",
    },
  },

  // 12. GitHub
  github: {
    name: "GitHub",
    description: "Inspired by GitHub UI colors",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F6F8FA",
      bgTertiary: "#EAEEF2",
      textPrimary: "#1F2328",
      textSecondary: "#59636E",
      textMuted: "#8C959F",
      accent: "#0969DA",
      accentHover: "#0550AE",
      accentLight: "#218BFF",
      border: "#D1D9E0",
      borderMuted: "#EAEEF2",
    },
    dark: {
      bgPrimary: "#0D1117",
      bgSecondary: "#161B22",
      bgTertiary: "#21262D",
      textPrimary: "#E6EDF3",
      textSecondary: "#7D8590",
      textMuted: "#59636E",
      accent: "#2F81F7",
      accentHover: "#58A6FF",
      accentLight: "#79C0FF",
      border: "#30363D",
      borderMuted: "#21262D",
    },
  },

  // 13. Mint Fresh
  mint: {
    name: "Mint Fresh",
    description: "Soft mint greens with clean UI feel",
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F0FDFA",
      bgTertiary: "#CCFBF1",
      textPrimary: "#134E4A",
      textSecondary: "#0F766E",
      textMuted: "#5EEAD4",
      accent: "#14B8A6",
      accentHover: "#0D9488",
      accentLight: "#2DD4BF",
      border: "#99F6E4",
      borderMuted: "#CCFBF1",
    },
    dark: {
      bgPrimary: "#042F2E",
      bgSecondary: "#134E4A",
      bgTertiary: "#115E59",
      textPrimary: "#F0FDFA",
      textSecondary: "#99F6E4",
      textMuted: "#5EEAD4",
      accent: "#14B8A6",
      accentHover: "#2DD4BF",
      accentLight: "#5EEAD4",
      border: "#115E59",
      borderMuted: "#134E4A",
    },
  },
};
