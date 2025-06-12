import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    languageToggle: {},
    languageButton: {
      padding: 8,
      borderRadius: 16,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    languageText: {
      fontSize: 20,
      fontWeight: "600",
      color: colors.white,
    },
  });
};

export default useStyles;
