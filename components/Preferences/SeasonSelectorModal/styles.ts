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
      width: "90%",
      maxHeight: "80%",
      backgroundColor: colors.white,
      borderRadius: 12,
      padding: 16,
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
      marginBottom: 16,
      textAlign: "center",
    },
    actionsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
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
    seasonsContainer: {
      maxHeight: 300,
      marginBottom: 16,
    },
    seasonsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    seasonItem: {
      width: "14%",
      aspectRatio: 1,
      margin: "1%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.simpsonBlue + "20", // Add transparency
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
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      flex: 1,
      padding: 16,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 4,
    },
    cancelButton: {
      backgroundColor: colors.simpsonRed + "20", // Add transparency
    },
    applyButton: {
      backgroundColor: colors.simpsonBlue,
    },
    cancelButtonText: {
      color: colors.black,
      fontSize: 16,
      fontWeight: "500",
    },
    applyButtonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: "500",
    },
  });
}
