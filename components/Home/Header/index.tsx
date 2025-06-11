import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text } from "react-native";
import Header from "@/components/common/Header";

export default function CustomHomeHeader() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleSettings = useCallback(() => {
    router.push(`/${ROUTES.PREFERENCES}`);
  }, [router]);

  return (
    <Header
      title={t("welcome.title")}
      leftIcon={<Text style={{ fontSize: 24 }}>{t("home.tvIcon")}</Text>}
      rightIcon={<Text style={{ fontSize: 24 }}>{t("home.settingsIcon")}</Text>}
      onRightPress={handleSettings}
    />
  );
}
