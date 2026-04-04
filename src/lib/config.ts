export const siteConfig = {
  name: "PLUG237",
  tagline: "Make Money Online in Cameroon",
  domain: "plug237.com",
  url: "https://plug237.com",
  locales: ["en", "fr"] as const,
  defaultLocale: "en" as const,
  colors: {
    accent: "#f59e0b",
    accentHover: "#d97706",
    bg: "#0f0f14",
    bgSurface: "#16161e",
    bgElevated: "#1e1e28",
    border: "#2a2a36",
    text: "#e4e4e7",
    textMuted: "#71717a",
    textDim: "#52525b",
  },
};

export type Locale = (typeof siteConfig.locales)[number];
