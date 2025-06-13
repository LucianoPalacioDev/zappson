import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: colors.white,
    },
    errorText: {
      fontSize: 16,
      textAlign: "center",
      marginVertical: 20,
      color: colors.black,
    },
  });
}
