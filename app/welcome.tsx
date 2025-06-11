import { ROUTES } from "@/constants/routes";
import { USERNAME_KEY } from "@/constants/store-keys";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/hooks/useThemeColor";
import useStyles from "@/styles/welcome.styles";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
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
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{t("welcome.title")}</Text>
            <Text style={styles.emoji}>📺</Text>
            <Text style={styles.subtitle}>{t("welcome.subtitle")}</Text>
            <Text style={styles.description}>{t("welcome.description")}</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>{t("welcome.nameQuestion")}</Text>
            <TextInput
              style={[styles.input, isInputFocused && styles.inputFocused]}
              value={name}
              onChangeText={setName}
              placeholder={t("welcome.namePlaceholder")}
              placeholderTextColor={"#6B7280"}
              selectionColor={colors.black}
              cursorColor={colors.black}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              returnKeyType="done"
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
