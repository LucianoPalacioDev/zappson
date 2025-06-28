import Header from "@/components/common/Header";
import LanguageMenu from "@/components/Home/LanguageMenu";
import LanguageToggle from "@/components/Home/LanguageToggle";
import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";

export default function CustomHomeHeader() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);

  const openLanguageMenu = () => {
    setIsLanguageMenuVisible(true);
  };

  const closeLanguageMenu = () => {
    setIsLanguageMenuVisible(false);
  };

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
        onLeftPress={openLanguageMenu}
        onRightPress={handleSettings}
      />
      <LanguageMenu
        isVisible={isLanguageMenuVisible}
        onClose={closeLanguageMenu}
      />
    </View>
  );
}
