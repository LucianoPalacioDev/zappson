import Header from "@/components/common/Header";
import LanguageToggle from "@/components/Home/LanguageToggle";
import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text, View } from "react-native";

export default function CustomHomeHeader() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleSettings = useCallback(() => {
    router.push(`/${ROUTES.PREFERENCES}`);
  }, [router]);

  return (
    <View>
      <Header
        title={t("welcome.title")}
        leftIcon={<LanguageToggle />}
        rightIcon={
          <Text style={{ fontSize: 24 }}>{t("home.settingsIcon")}</Text>
        }
        onRightPress={handleSettings}
      />
    </View>
  );
}
