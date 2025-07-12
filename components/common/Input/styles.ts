import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    label: {
      color: colors.white,
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 8,
    },
    input: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderColor: colors.white,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      color: colors.black,
    },
    inputFocused: {
      borderColor: colors.simpsonBlue,
      borderWidth: 2,
    },
  });
};

export default useStyles;
