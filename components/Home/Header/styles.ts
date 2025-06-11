import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    safeArea: {
      backgroundColor: colors.simpsonYellow,
    },
    navBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 12,
      backgroundColor: colors.simpsonYellow,
    },
    navLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingTop: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.black,
    },
    settingsButton: {
      padding: 8,
    },
  });
}
