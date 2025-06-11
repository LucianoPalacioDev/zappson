import Header from "@/components/common/Header";
import { BackIcon } from "@/components/common/Icons/BackIcon";
import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";

export default function CustomPreferencesHeader() {
  const router = useRouter();
  const { t } = useLanguage();

  const handleBack = useCallback(() => {
    router.replace(`/${ROUTES.HOME}`);
  }, [router]);

  return (
    <Header
      title={t("preferences.title")}
      leftIcon={
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 8,
          }}
        >
          <BackIcon size={24} color="white" />
        </View>
      }
      onLeftPress={handleBack}
    />
  );
}
