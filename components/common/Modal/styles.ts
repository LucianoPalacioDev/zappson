import { useTheme } from "@/hooks/useThemeColor";
import { Dimensions, StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();
  const modalWidth = Dimensions.get("window").width - 24;

  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      width: "100%",
    },
    modalContent: {
      width: modalWidth,
      backgroundColor: colors.white,
      borderRadius: 12,
      padding: 16,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
}
