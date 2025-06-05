import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/hooks/useThemeColor";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useStyles from "./styles";

export default function WelcomeScreen() {
  const [name, setName] = useState("");
  const { colors } = useTheme();
  const { t } = useLanguage();
  const styles = useStyles();

  const handleContinue = () => {
    if (name.trim()) {
      console.log("handleContinue");
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
          style={[styles.button, !name.trim() && styles.buttonDisabled]}
          disabled={!name.trim()}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>{t("welcome.continueButton")}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
