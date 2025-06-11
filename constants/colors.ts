const baseLightColors = {
  simpsonYellow: "#FFD700",
  simpsonBlue: "#4A90E2",
  simpsonOrange: "#FF8C00",
  simpsonGreen: "#32CD32",
  simpsonRed: "#FF4444",
  simpsonPurple: "#8A2BE2",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

// TODO: make a real dark theme
const baseDarkColors = {
  simpsonYellow: "#FFD700",
  simpsonBlue: "#4A90E2",
  simpsonOrange: "#FF8C00",
  simpsonGreen: "#32CD32",
  simpsonRed: "#FF4444",
  simpsonPurple: "#8A2BE2",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

export const lightColors = {
  ...baseLightColors,
} as const;

export const darkColors = {
  ...baseDarkColors,
} as const;

export type ThemeColors = typeof lightColors;

export const Colors = {
  light: lightColors,
  dark: darkColors,
} as const;

export type ThemeName = keyof typeof Colors;

export type ColorKey = keyof ThemeColors;
