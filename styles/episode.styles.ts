import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet, useWindowDimensions } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.transparent,
    },
    scrollContent: {
      flexGrow: 1,
      paddingVertical: 16,
    },
    content: {
      flex: 1,
      marginHorizontal: 16,
      flexDirection: "column",
      borderRadius: 12,
    },
    imageContainer: {
      backgroundColor: colors.simpsonBlue,
      height: "30%",
      justifyContent: "center",
      alignItems: "center",
      borderTopEndRadius: 12,
      borderTopStartRadius: 12,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    imageEmoji: {
      fontSize: 64,
    },
    infoContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.white,
      borderBottomEndRadius: 12,
      borderBottomStartRadius: 12,
      justifyContent: "space-between",
    },
    infoContent: {
      gap: 12,
    },
    tags: {
      flexDirection: "row",
      justifyContent: "space-between",
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
    },
    descriptionContainer: {
      maxHeight: height * 0.25,
    },
    description: {
      fontSize: 16,
      color: "#444",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: 12,
    },
    buttonPrimary: {
      backgroundColor: colors.simpsonBlue,
      padding: 16,
      borderRadius: 16,
      alignItems: "center",
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
