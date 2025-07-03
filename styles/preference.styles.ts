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
    },
    optionContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    option: {
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#ccc",
    },
    optionSelected: {
      backgroundColor: "#DDF4FF",
      borderColor: "#00BFFF",
    },
    optionEmoji: {
      fontSize: 22,
      marginRight: 12,
    },
    optionText: {
      fontSize: 16,
      fontWeight: "500",
    },
    optionSubtext: {
      fontSize: 12,
      color: "#666",
    },
    specialRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#ccc",
    },
    specialTextContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    saveButton: {
      backgroundColor: colors.simpsonBlue,
      padding: 16,
      borderRadius: 12,
      alignItems: "center",
    },
    saveButtonText: {
      color: colors.white,
      fontWeight: "bold",
      fontSize: 16,
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
