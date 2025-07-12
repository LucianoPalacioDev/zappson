import Input from "@/components/common/Input";
import CustomModal from "@/components/common/Modal";
import { USERNAME_KEY } from "@/constants/store-keys";
import { useLanguage } from "@/contexts/LanguageContext";
import * as SecureStore from "expo-secure-store";
import React, { useCallback, useEffect, useState } from "react";
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
  const [name, setName] = useState("");
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const loadUserName = useCallback(async () => {
    try {
      const name = await SecureStore.getItemAsync(USERNAME_KEY);
      if (name) {
        setName(name);
      }
    } catch (error) {
      console.error("Error loading user name:", error);
    }
  }, []);

  useEffect(() => {
    loadUserName();
  }, [loadUserName]);

  const handleApply = useCallback(async () => {
    try {
      await SecureStore.setItemAsync(USERNAME_KEY, name);
    } catch (error) {
      console.error("Error saving user name:", error);
    }

    onClose();
  }, [name, onClose]);

  const handleNameChange = useCallback((value: string) => {
    setName(value);
    setIsSaveButtonDisabled(value.trim() === "");
  }, []);

  return (
    <CustomModal visible={visible} onClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{t("manageAccount.title")}</Text>
        <View>
          <Input
            value={name}
            setValue={handleNameChange}
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
              isSaveButtonDisabled && styles.applyButtonDisabled,
            ]}
            onPress={handleApply}
            disabled={isSaveButtonDisabled}
          >
            <Text style={styles.applyButtonText}>{t("common.apply")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
}
