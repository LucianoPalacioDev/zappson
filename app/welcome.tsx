import Input from "@/components/common/Input";
import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUser } from "@/contexts/UserContext";
import useStyles from "@/styles/welcome.styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const router = useRouter();
  const styles = useStyles();
  const { handleChangeName } = useUser();

  const handleContinue = async () => {
    if (!name.trim()) return;

    try {
      setIsLoading(true);
      handleChangeName(name.trim());
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
            <Input
              value={name}
              setValue={setName}
              label={t("welcome.nameQuestion")}
              placeholder={t("welcome.namePlaceholder")}
              customInputStyles={{ marginBottom: 24 }}
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
