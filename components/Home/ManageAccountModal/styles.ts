import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    modalContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.black,
      textAlign: "center",
    },
    label: {
      color: colors.black,
    },
    input: {
      borderColor: colors.black,
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    applyButton: {
      backgroundColor: colors.simpsonBlue,
      padding: 16,
      borderRadius: 12,
      alignItems: "center",
    },
    applyButtonText: {
      color: colors.white,
      fontWeight: "bold",
      fontSize: 16,
    },
    applyButtonDisabled: {
      backgroundColor: "#9CA3AF",
    },
    cancelButton: {
      backgroundColor: "#666",
      padding: 16,
      borderRadius: 16,
      alignItems: "center",
    },
    cancelButtonText: {
      color: colors.white,
      fontWeight: "bold",
      fontSize: 16,
    },
  });
}
