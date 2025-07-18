import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.transparent,
    },
    emoji: {
      fontSize: 64,
      marginBottom: 16,
    },
    loadingText: {
      color: colors.white,
      fontSize: 24,
      fontWeight: "500",
      marginBottom: 16,
    },
    character: {
      fontSize: 72,
      marginBottom: 48,
    },
  });
}
