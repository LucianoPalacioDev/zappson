import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStyles from "./styles";

export default function CustomPreferencesHeader() {
  const styles = useStyles();
  const router = useRouter();
  const { t } = useLanguage();

  const handleBack = useCallback(() => {
    router.replace(`/${ROUTES.HOME}`);
  }, [router]);

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backText}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t("preferences.title")}</Text>
      </View>
    </SafeAreaView>
  );
}
