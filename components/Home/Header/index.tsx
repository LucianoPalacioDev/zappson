import Header from "@/components/common/Header";
import LanguageToggle from "@/components/Home/LanguageToggle";
import ManageAccountModal from "@/components/Home/ManageAccountModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";

export default function CustomHomeHeader() {
  const { t } = useLanguage();
  const [showManageAccountModal, setShowManageAccountModal] = useState(false);

  const handleManageAccountModalOpen = useCallback(() => {
    setShowManageAccountModal(true);
  }, []);

  const handleManageAccountModalClose = useCallback(() => {
    setShowManageAccountModal(false);
  }, []);

  return (
    <View>
      <Header
        title={t("welcome.title")}
        leftIcon={<LanguageToggle />}
        rightIcon={
          <Text style={{ fontSize: 24 }}>{t("home.settingsIcon")}</Text>
        }
        onRightPress={handleManageAccountModalOpen}
      />
      <ManageAccountModal
        visible={showManageAccountModal}
        onClose={handleManageAccountModalClose}
      />
    </View>
  );
}
