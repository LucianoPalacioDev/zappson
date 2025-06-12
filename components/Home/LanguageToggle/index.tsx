import { ENGLISH_LANGUAGE } from "@/constants/languages";
import { useLanguage } from "@/contexts/LanguageContext";
import { Text, View } from "react-native";
import useStyles from "./styles";

export default function LanguageToggle() {
  const { language } = useLanguage();
  const styles = useStyles();

  return (
    <View style={styles.languageToggle}>
      <Text style={styles.languageText}>
        {language === ENGLISH_LANGUAGE ? "🇬🇧" : "🇪🇸"}
      </Text>
    </View>
  );
}
