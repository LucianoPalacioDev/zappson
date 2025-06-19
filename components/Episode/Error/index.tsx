import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import useStyles from "./styles";

export default function ErrorSeasonFetch({
  error,
  handleBack,
  handleRetry,
}: {
  error: string;
  handleBack: () => void;
  handleRetry: () => void;
}) {
  const styles = useStyles();
  const { colors } = useTheme();
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Ionicons
          name="alert-circle"
          size={64}
          color={colors.simpsonRed}
          style={styles.errorIcon}
        />
        <Text style={styles.errorText}>{error}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleRetry}>
            <Text style={styles.buttonText}>{t("common.retry")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonSecondary, { marginTop: 10 }]}
            onPress={handleBack}
          >
            <Text style={styles.buttonText}>{t("common.backToHome")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
