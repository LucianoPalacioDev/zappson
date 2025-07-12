import Input from "@/components/common/Input";
import CustomModal from "@/components/common/Modal";
import { useLanguage } from "@/contexts/LanguageContext";
import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useStyles from "./styles";

type ManageAccountModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function ManageAccountModal({
  visible,
  onClose,
}: ManageAccountModalProps) {
  const styles = useStyles();
  const { t } = useLanguage();
  // TODO: init with the current name
  const [name, setName] = useState("");

  const isDisabled = false;

  const handleApply = useCallback(() => {
    console.log("handleApply");
  }, []);

  return (
    <CustomModal visible={visible} onClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{t("manageAccount.title")}</Text>
        <View>
          <Input
            value={name}
            setValue={setName}
            label={t("manageAccount.nameLabel")}
            placeholder={t("manageAccount.namePlaceholder")}
            customLabelStyles={styles.label}
            customInputStyles={styles.input}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>{t("common.cancel")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.applyButton,
              isDisabled && styles.applyButtonDisabled,
            ]}
            onPress={handleApply}
            disabled={isDisabled}
          >
            <Text style={styles.applyButtonText}>{t("common.apply")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
}
