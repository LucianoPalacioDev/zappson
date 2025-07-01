import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    languageText: {
      fontSize: 20,
      fontWeight: "600",
      color: colors.black,
    },
    menuContainer: {
      position: "absolute",
      backgroundColor: colors.white,
      width: 150,
      borderRadius: 8,
      padding: 8,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 1000,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 6,
    },
    selectedItem: {
      backgroundColor: "rgba(0, 122, 255, 0.1)",
    },
    flag: {
      fontSize: 20,
      marginRight: 12,
    },
    languageName: {
      fontSize: 15,
      color: colors.black,
      fontWeight: "500",
    },
  });
};

export default useStyles;
