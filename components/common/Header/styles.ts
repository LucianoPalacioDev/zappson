import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    safeArea: {
      backgroundColor: colors.simpsonYellow,
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      paddingTop: 0,
      backgroundColor: colors.simpsonYellow,
    },
    leftContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "800",
      color: colors.white,
      padding: 8,
    },
    iconButton: {
      padding: 8,
      minWidth: 40,
      alignItems: "center",
    },
    rightContainer: {
      minWidth: 40,
      alignItems: "flex-end",
    },
  });
}
