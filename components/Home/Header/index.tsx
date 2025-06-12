import Header from "@/components/common/Header";
import LanguageToggle from "@/components/Home/LanguageToggle";
import { ENGLISH_LANGUAGE, SPANISH_LANGUAGE } from "@/constants/languages";
import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text } from "react-native";

export default function CustomHomeHeader() {
  const { t, language, setLanguage } = useLanguage();
  const router = useRouter();

  const toggleLanguage = () => {
    setLanguage(
      language === ENGLISH_LANGUAGE ? SPANISH_LANGUAGE : ENGLISH_LANGUAGE
    );
  };

  const handleSettings = useCallback(() => {
    router.push(`/${ROUTES.PREFERENCES}`);
  }, [router]);

  return (
    <Header
      title={t("welcome.title")}
      leftIcon={<LanguageToggle />}
      rightIcon={<Text style={{ fontSize: 24 }}>{t("home.settingsIcon")}</Text>}
      onLeftPress={toggleLanguage}
      onRightPress={handleSettings}
    />
  );
}
