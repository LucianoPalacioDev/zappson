import { StyleSheet } from "react-native";
import { useTheme } from "@/hooks/useThemeColor";

export default function useNotFoundStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.transparent,
    },
    header: {
      marginBottom: 32,
      alignItems: "center",
    },
    title: {
      fontSize: 48,
      color: colors.white,
      fontWeight: "bold",
      marginBottom: 16,
      textAlign: "center",
    },
    emoji: {
      fontSize: 64,
      marginBottom: 24,
    },
    subtitle: {
      fontSize: 24,
      color: colors.white,
      fontWeight: "bold",
      marginBottom: 12,
      textAlign: "center",
    },
    description: {
      color: colors.white,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 22,
      maxWidth: 320,
      marginBottom: 32,
    },
    button: {
      backgroundColor: colors.simpsonBlue,
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 16,
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: "bold",
    },
  });
}
