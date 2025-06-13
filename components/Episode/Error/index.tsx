import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();

  return (
    <View style={[styles.container, styles.errorContainer]}>
      {/* TODO: use a common icon and simpson red */}
      <Ionicons name="alert-circle" size={64} color="#ff4444" />
      <Text style={styles.errorText}>{error}</Text>
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
  );
}
