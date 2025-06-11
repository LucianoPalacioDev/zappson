import { ColorKey, Colors, ThemeName } from "@/constants/colors";
import { useColorScheme } from "@/hooks/useColorScheme";

/**
 * Hook to get colors from the current theme
 * @param colorName - Name of the color to get
 * @param theme - Specific theme (optional). If not provided, the system/device theme will be used
 * @returns The color corresponding to the current theme
 */
export function useThemeColor(colorName: ColorKey, theme?: ThemeName): string {
  const systemTheme = useColorScheme() as ThemeName;
  const selectedTheme = theme || systemTheme || "light";

  return Colors[selectedTheme][colorName];
}

/**
 * Hook to get the complete color object of the current theme
 * @param theme - Specific theme (optional). If not provided, the system/device theme will be used
 * @returns Object containing all colors from the current theme
 */
export function useTheme(theme?: ThemeName) {
  const systemTheme = useColorScheme() as ThemeName;
  const selectedTheme = theme || systemTheme || "light";

  return {
    colors: Colors[selectedTheme],
    isDark: selectedTheme === "dark",
    isLight: selectedTheme === "light",
  };
}
