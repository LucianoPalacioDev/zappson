import { Colors } from "@/constants/Colors";
import { ROUTES } from "@/constants/routes";
import { USERNAME_KEY } from "@/constants/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import useStyles from "@/styles/home.styles";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const { t } = useLanguage();
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const styles = useStyles();

  const loadUserName = useCallback(async () => {
    try {
      const name = await SecureStore.getItemAsync(USERNAME_KEY);
      if (name) {
        setUserName(name);
      } else {
        router.replace(`/${ROUTES.WELCOME}`);
      }
    } catch (error) {
      console.error("Error loading user name:", error);
      router.replace(`/${ROUTES.WELCOME}`);
    }
  }, [router]);

  useEffect(() => {
    loadUserName();
  }, [loadUserName]);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -15,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [bounceAnim]);

  const handleRandomEpisode = useCallback(() => {
    router.push(`/${ROUTES.EPISODE}`);
  }, [router]);

  const handlePreferences = useCallback(() => {
    router.push(`/${ROUTES.PREFERENCES}`);
  }, [router]);

  const handleSettings = useCallback(() => {
    router.push(`/${ROUTES.PREFERENCES}`);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.navLeft}>
          <Text style={{ fontSize: 24 }}>{t("home.tvIcon")}</Text>
          <Text style={styles.title}>{t("welcome.title")}</Text>
        </View>
        <TouchableOpacity
          onPress={handleSettings}
          style={styles.settingsButton}
        >
          <Text style={{ fontSize: 24 }}>{t("home.settingsIcon")}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>
            {t("home.greeting", { name: userName })}
          </Text>
          <Text style={styles.subtitle}>{t("home.subtitle")}</Text>
        </View>

        <Animated.Text
          style={[
            styles.character,
            { transform: [{ translateY: bounceAnim }] },
          ]}
        >
          {t("home.donutIcon")}
        </Animated.Text>

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
