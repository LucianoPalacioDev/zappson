import { useTheme } from "@/hooks/useThemeColor";
import { Dimensions, StyleSheet } from "react-native";

const DEFAULT_PADDING = 16;
const DEFAULT_MARGIN = 12;
const DEFAULT_ITEM_SPACING = 4;

export default function useStyles() {
  const { colors } = useTheme();
  const modalWidth =
    Dimensions.get("window").width -
    DEFAULT_MARGIN * 2 -
    DEFAULT_PADDING -
    DEFAULT_ITEM_SPACING * 6;
  const numColumns = 6;
  const itemSize =
    (modalWidth - (numColumns + 1) * DEFAULT_ITEM_SPACING) / numColumns;

  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      width: "100%",
    },
    modalContent: {
      marginHorizontal: DEFAULT_MARGIN,
      backgroundColor: colors.white,
      borderRadius: 12,
      padding: DEFAULT_PADDING,
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
    },
    seasonItem: {
      width: itemSize,
      height: itemSize,
      margin: DEFAULT_ITEM_SPACING / 2,
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
