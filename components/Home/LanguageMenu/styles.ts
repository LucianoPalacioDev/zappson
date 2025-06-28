import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "flex-start",
      paddingTop: 60,
      paddingLeft: 20,
    },
    menuContainer: {
      backgroundColor: colors.white,
      width: 200,
      borderRadius: 8,
      padding: 8,
      elevation: 5,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
    },
    flag: {
      fontSize: 24,
      marginRight: 12,
    },
    languageText: {
      fontSize: 16,
    },
    divider: {
      height: 1,
      backgroundColor: "#e0e0e0",
      marginVertical: 4,
    },
  });
};

export default useStyles;
