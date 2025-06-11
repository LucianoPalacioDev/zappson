import { ALL_AGE_TYPES, ALL_ERAS_TYPES } from "@/constants/filters";
import { ROUTES } from "@/constants/routes";
import { PREFERENCES_KEY } from "@/constants/store-keys";
import type { Age, Era, Preferences } from "@/constants/types";
import { useLanguage } from "@/contexts/LanguageContext";
import useStyles from "@/styles/preference.styles";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

const PreferencesScreen: React.FC = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    era: "all",
    ageFilter: "all",
    includeSpecials: true,
  });

  const styles = useStyles();
  const router = useRouter();
  const { t } = useLanguage();

  const { eras, ageFilters } = useMemo<{
    eras: Era[];
    ageFilters: Age[];
  }>(() => {
    return {
      eras: ALL_ERAS_TYPES.map(
        (key) =>
          ({
            value: key.value,
            emoji: t(`preferences.era.${key.value}.emoji`),
            label: t(`preferences.era.${key.value}.label`),
          } as const)
      ).filter((era): era is Era => Boolean(era.emoji && era.label)),
      ageFilters: ALL_AGE_TYPES.map(
        (key) =>
          ({
            value: key.value,
            emoji: t(`preferences.age.${key.value}.emoji`),
            label: t(`preferences.age.${key.value}.label`),
          } as const)
      ).filter((age): age is Age => Boolean(age.emoji && age.label)),
    };
  }, [t]);

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const savedPrefs = await SecureStore.getItemAsync(PREFERENCES_KEY);
        if (savedPrefs) {
          setPreferences(JSON.parse(savedPrefs));
        }
      } catch (error) {
        console.error("Error loading preferences:", error);
      }
    };
    loadPreferences();
  }, []);

  const handleSave = useCallback(async () => {
    try {
      await SecureStore.setItemAsync(
        PREFERENCES_KEY,
        JSON.stringify(preferences)
      );
      router.replace(`/${ROUTES.HOME}`);
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
  }, [preferences, router]);

  const handleBack = useCallback(() => {
    router.replace(`/${ROUTES.HOME}`);
  }, [router]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backText}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t("preferences.title")}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>{t("preferences.era.title")}</Text>
        {eras.map((era) => (
          <TouchableOpacity
            key={era.value}
            style={[
              styles.option,
              preferences.era === era.value && styles.optionSelected,
            ]}
            onPress={() => setPreferences({ ...preferences, era: era.value })}
          >
            <Text style={styles.optionEmoji}>{era.emoji}</Text>
            <Text style={styles.optionText}>{era.label}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>{t("preferences.age.title")}</Text>
        {ageFilters.map((filter) => (
          <TouchableOpacity
            key={filter.value}
            style={[
              styles.option,
              preferences.ageFilter === filter.value && styles.optionSelected,
            ]}
            onPress={() =>
              setPreferences({ ...preferences, ageFilter: filter.value })
            }
          >
            <Text style={styles.optionEmoji}>{filter.emoji}</Text>
            <Text style={styles.optionText}>{filter.label}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>
          {t("preferences.specials.title")}
        </Text>
        <View style={styles.specialRow}>
          <View style={styles.specialTextContainer}>
            <Text style={styles.optionEmoji}>
              {t("preferences.specials.emoji")}
            </Text>
            <View>
              <Text style={styles.optionText}>
                {t("preferences.specials.label")}
              </Text>
              <Text style={styles.optionSubtext}>
                {t("preferences.specials.description")}
              </Text>
            </View>
          </View>
          <Switch
            value={preferences.includeSpecials}
            onValueChange={(value) =>
              setPreferences({ ...preferences, includeSpecials: value })
            }
          />
        </View>

        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>
            {t("preferences.buttons.save")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBack} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>
            {t("preferences.buttons.cancel")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PreferencesScreen;
