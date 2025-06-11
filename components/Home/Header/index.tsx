import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useStyles from "./styles";

export default function CustomHomeHeader() {
  const { t } = useLanguage();
  const router = useRouter();
  const styles = useStyles();

  const handleSettings = useCallback(() => {
    router.push(`/${ROUTES.PREFERENCES}`);
  }, [router]);

  return (
    <View style={styles.navBar}>
      <View style={styles.navLeft}>
        <Text style={{ fontSize: 24 }}>{t("home.tvIcon")}</Text>
        <Text style={styles.title}>{t("welcome.title")}</Text>
      </View>
      <TouchableOpacity onPress={handleSettings} style={styles.settingsButton}>
        <Text style={{ fontSize: 24 }}>{t("home.settingsIcon")}</Text>
      </TouchableOpacity>
    </View>
  );
}
