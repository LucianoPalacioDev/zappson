import Input from "@/components/common/Input";
import CustomModal from "@/components/common/Modal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUser } from "@/contexts/UserContext";
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
  const [newName, setNewName] = useState("");
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const { name, handleChangeName } = useUser();

  useEffect(() => {
    setNewName(name);
  }, [name]);

  const handleApply = useCallback(() => {
    try {
      handleChangeName(newName);
    } catch (error) {
      console.error("Error saving user name:", error);
    }

    onClose();
  }, [handleChangeName, newName, onClose]);

  const handleNameChange = useCallback((value: string) => {
    setNewName(value);
    setIsSaveButtonDisabled(value.trim() === "");
  }, []);

  return (
    <CustomModal visible={visible} onClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{t("manageAccount.title")}</Text>
        <View>
          <Input
            value={newName}
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
