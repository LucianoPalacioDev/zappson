import { ROUTES } from "@/constants/routes";
import { USERNAME_KEY } from "@/constants/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useStyles from "./index.styles";

export default function WelcomeScreen() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();
  const { t } = useLanguage();
  const router = useRouter();
  const styles = useStyles();

  const handleContinue = async () => {
    if (!name.trim()) return;

    try {
      setIsLoading(true);
      await SecureStore.setItemAsync(USERNAME_KEY, name.trim());
      router.replace(`/${ROUTES.HOME}`);
    } catch (error) {
      console.error("Error saving name:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{t("welcome.title")}</Text>
        <Text style={styles.emoji}>📺</Text>
        <Text style={styles.subtitle}>{t("welcome.subtitle")}</Text>
        <Text style={styles.description}>{t("welcome.description")}</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>{t("welcome.nameQuestion")}</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder={t("welcome.namePlaceholder")}
          placeholderTextColor={"#6B7280"}
          selectionColor={colors.white}
        />

        <TouchableOpacity
          disabled={isLoading || !name.trim()}
          style={[
            styles.button,
            !name.trim() && styles.buttonDisabled,
            isLoading && styles.buttonLoading,
          ]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>
            {isLoading ? t("common.loading") : t("welcome.continueButton")}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
