import Header from "@/components/common/Header";
import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text } from "react-native";

export default function CustomPreferencesHeader() {
  const router = useRouter();
  const { t } = useLanguage();

  const handleBack = useCallback(() => {
    router.replace(`/${ROUTES.HOME}`);
  }, [router]);

  return (
    <Header
      title={t("preferences.title")}
      leftIcon={<Text style={{ fontSize: 24 }}>◀</Text>}
      onLeftPress={handleBack}
    />
  );
}
