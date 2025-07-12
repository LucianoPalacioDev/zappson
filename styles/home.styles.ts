import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.transparent,
    },
    backgroundGradient: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    navBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    navLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      color: colors.white,
      marginLeft: 8,
      fontFamily: "ComicNeue-Bold",
    },
    settingsButton: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 48,
      alignItems: "center",
      justifyContent: "center",
    },
    greeting: {
      marginBottom: 48,
      alignItems: "center",
    },
    greetingText: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors.white,
      marginBottom: 8,
      fontFamily: "ComicNeue-Bold",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 600,
      color: colors.white,
      fontFamily: "ComicNeue-Regular",
    },
    character: {
      fontSize: 72,
      marginBottom: 48,
    },
    buttonContainer: {
      width: "100%",
      maxWidth: 400,
      gap: 16,
    },
    button: {
      width: "100%",
      paddingVertical: 24,
      paddingHorizontal: 24,
      borderRadius: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.white,
      marginLeft: 12,
      fontFamily: "ComicNeue-Bold",
    },
    buttonIcon: {
      fontSize: 28,
      marginRight: 8,
    },
  });
}
