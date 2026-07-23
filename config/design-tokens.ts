export const designTokens = {
  colors: {
    surface: "var(--rf-color-surface)",
    surfaceRaised: "var(--rf-color-surface-raised)",
    surfaceSubtle: "var(--rf-color-surface-subtle)",
    border: "var(--rf-color-border)",
    text: "var(--rf-color-text)",
    textMuted: "var(--rf-color-text-muted)",
    brand: "var(--rf-color-brand)",
    success: "var(--rf-color-success)",
    warning: "var(--rf-color-warning)",
    danger: "var(--rf-color-danger)",
  },
  typography: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  spacing: {
    xs: "var(--rf-space-1)",
    sm: "var(--rf-space-2)",
    md: "var(--rf-space-4)",
    lg: "var(--rf-space-6)",
    xl: "var(--rf-space-8)",
    section: "var(--rf-space-20)",
  },
  radii: {
    sm: "var(--rf-radius-sm)",
    md: "var(--rf-radius-md)",
    lg: "var(--rf-radius-lg)",
    xl: "var(--rf-radius-xl)",
    full: "var(--rf-radius-full)",
  },
  shadows: {
    sm: "var(--rf-shadow-sm)",
    md: "var(--rf-shadow-md)",
    lg: "var(--rf-shadow-lg)",
  },
} as const;

export type DesignTokens = typeof designTokens;
