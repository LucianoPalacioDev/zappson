import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.simpsonYellow,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.simpsonYellow,
    },
    emoji: {
      fontSize: 64,
      marginBottom: 16,
    },
    loadingText: {
      fontSize: 18,
      marginBottom: 16,
    },
    imageContainer: {
      backgroundColor: colors.simpsonBlue,
      height: 180,
      justifyContent: "center",
      alignItems: "center",
    },
    imageEmoji: {
      fontSize: 64,
    },
    infoContainer: {
      padding: 20,
      backgroundColor: colors.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      marginTop: -24,
    },
    tags: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    tagYellow: {
      backgroundColor: colors.simpsonYellow,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 20,
      fontWeight: "bold",
    },
    tagRed: {
      backgroundColor: colors.simpsonRed,
      color: colors.white,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 20,
      fontWeight: "bold",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 12,
    },
    description: {
      fontSize: 16,
      color: "#444",
      marginBottom: 24,
    },
    buttonPrimary: {
      backgroundColor: colors.simpsonBlue,
      padding: 16,
      borderRadius: 16,
      alignItems: "center",
      marginBottom: 12,
    },
    buttonSecondary: {
      backgroundColor: "#666",
      padding: 16,
      borderRadius: 16,
      alignItems: "center",
    },
    buttonText: {
      color: colors.white,
      fontWeight: "bold",
      fontSize: 16,
    },
  });
}
