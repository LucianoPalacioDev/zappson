import Donut from "@/components/common/Donut";
import { Colors } from "@/constants/colors";
import { ROUTES } from "@/constants/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUser } from "@/contexts/UserContext";
import useStyles from "@/styles/home.styles";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const styles = useStyles();
  const { name } = useUser();

  const checkUserName = useCallback(async () => {
    try {
      if (!name) {
        router.replace(`/${ROUTES.WELCOME}`);
      }
    } catch (error) {
      console.error("Error loading user name:", error);
      router.replace(`/${ROUTES.WELCOME}`);
    }
  }, [name, router]);

  useEffect(() => {
    checkUserName();
  }, [checkUserName]);

  const handleRandomEpisode = useCallback(() => {
    router.push(`/${ROUTES.EPISODE}`);
  }, [router]);

  const handlePreferences = useCallback(() => {
    router.push(`/${ROUTES.PREFERENCES}`);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>
            {t("home.greeting", { name })}
          </Text>
          <Text style={styles.subtitle}>{t("home.subtitle")}</Text>
        </View>
        <Donut />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleRandomEpisode}
            style={[
              styles.button,
              { backgroundColor: Colors.light.simpsonBlue },
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonIcon}>{t("home.diceIcon")}</Text>
            <Text style={styles.buttonText}>{t("home.randomEpisode")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePreferences}
            style={[
              styles.button,
              { backgroundColor: Colors.light.simpsonPurple },
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonIcon}>{t("home.settingsIcon")}</Text>
            <Text style={styles.buttonText}>{t("home.preferences")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
