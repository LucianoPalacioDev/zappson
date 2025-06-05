import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import useNotFoundStyles from "./styles";

export default function NotFoundScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const styles = useNotFoundStyles();

  const handleGoHome = () => {
    router.replace("/screens/welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🔍</Text>
        <Text style={styles.title}>{t("notFound.title")}</Text>
        <Text style={styles.subtitle}>{t("notFound.subtitle")}</Text>
        <Text style={styles.description}>{t("notFound.description")}</Text>
        <TouchableOpacity style={styles.button} onPress={handleGoHome}>
          <Text style={styles.buttonText}>{t("notFound.goBackButton")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
