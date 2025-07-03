import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      marginHorizontal: 16,
      maxHeight: "80%",
      backgroundColor: colors.white,
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.black,
      textAlign: "center",
    },
    actionsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    actionButton: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: colors.simpsonBlue,
    },
    actionButtonText: {
      color: colors.white,
      fontSize: 14,
      fontWeight: "500",
    },
    seasonsGrid: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      backgroundColor: "red",
    },
    seasonItem: {
      width: "15%",
      aspectRatio: 1,
      padding: 2,
      margin: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.simpsonBlue + "20",
      borderRadius: 8,
    },
    seasonItemSelected: {
      backgroundColor: colors.simpsonBlue,
    },
    seasonText: {
      fontSize: 16,
      color: colors.black,
    },
    seasonTextSelected: {
      color: colors.white,
      fontWeight: "bold",
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
