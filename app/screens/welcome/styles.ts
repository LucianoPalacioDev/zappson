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
      paddingVertical: 12,
      paddingHorizontal: 16,
      fontSize: 16,
      color: colors.black,
      marginBottom: 24,
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
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: "bold",
    },
  });
};

export default useStyles;
