import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    safeArea: {
      backgroundColor: colors.simpsonYellow,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      paddingTop: 0,
      backgroundColor: colors.simpsonYellow,
    },
    backButton: {
      marginRight: 12,
    },
    backText: {
      fontSize: 24,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
}
