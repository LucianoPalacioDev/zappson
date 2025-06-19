import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.transparent,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    errorText: {
      fontSize: 16,
      textAlign: "center",
      marginVertical: 20,
      color: colors.black,
    },
    infoContainer: {
      width: "100%",
      padding: 20,
      backgroundColor: colors.white,
      borderRadius: 12,
      justifyContent: "space-between",
    },
    errorIcon: {
      textAlign: "center",
    },
    buttonsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
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
