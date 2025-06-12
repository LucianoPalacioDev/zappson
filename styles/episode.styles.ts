import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.transparent,
    },
    content: {
      margin: 16,
      borderRadius: 12,
    },
    imageContainer: {
      backgroundColor: colors.simpsonBlue,
      height: 180,
      justifyContent: "center",
      alignItems: "center",
      borderTopEndRadius: 12,
      borderTopStartRadius: 12,
    },
    imageEmoji: {
      fontSize: 64,
    },
    infoContainer: {
      padding: 20,
      backgroundColor: colors.white,
      borderBottomEndRadius: 12,
      borderBottomStartRadius: 12,
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
