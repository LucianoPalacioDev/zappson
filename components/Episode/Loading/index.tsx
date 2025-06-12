import { useLanguage } from "@/contexts/LanguageContext";
import { ActivityIndicator, Text, View } from "react-native";
import useStyles from "./styles";

export default function LoadingEpisode() {
  const styles = useStyles();
  const { t } = useLanguage();
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.emoji}>🍩</Text>
      <Text style={styles.loadingText}>{t("episode.loading")}</Text>
      <ActivityIndicator size="large" color="#0057e7" />
    </View>
  );
}
