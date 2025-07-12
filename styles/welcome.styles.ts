import { useTheme } from "@/hooks/useThemeColor";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.transparent,
    },
    header: {
      marginBottom: 32,
      alignItems: "center",
    },
    title: {
      fontSize: 48,
      color: colors.white,
      fontWeight: "bold",
      marginBottom: 16,
      textAlign: "center",
    },
    emoji: {
      fontSize: 64,
      marginBottom: 24,
    },
    subtitle: {
      fontSize: 24,
      color: colors.white,
      fontWeight: "bold",
      marginBottom: 12,
      textAlign: "center",
    },
    description: {
      color: colors.white,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 22,
      maxWidth: 320,
      marginBottom: 32,
    },
    form: {
      width: "100%",
      maxWidth: 360,
    },
    button: {
      backgroundColor: colors.simpsonBlue,
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: "center",
      marginBottom: 16,
    },
    buttonDisabled: {
      backgroundColor: "#9CA3AF",
    },
    buttonLoading: {
      opacity: 0.7,
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: "bold",
    },
  });
};

export default useStyles;
