import Donut from "@/components/common/Donut";
import { useLanguage } from "@/contexts/LanguageContext";
import { Text, View } from "react-native";
import useStyles from "./styles";

export default function LoadingEpisode() {
  const styles = useStyles();
  const { t } = useLanguage();
  return (
    <View style={styles.loadingContainer}>
      <Donut />
      <Text style={styles.loadingText}>{t("episode.loading")}</Text>
    </View>
  );
}
