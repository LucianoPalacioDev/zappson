import FilterBox from "@/components/Preferences/FilterBox";
import {
  ALL_AGE_TYPES,
  ALL_ERAS_TYPES,
  DEFAULT_PREFERENCES,
} from "@/constants/filters";
import { ROUTES } from "@/constants/routes";
import { PREFERENCES_KEY } from "@/constants/store-keys";
import type { Age, Era, Preferences } from "@/constants/types";
import { useLanguage } from "@/contexts/LanguageContext";
import useStyles from "@/styles/preference.styles";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

export default function PreferencesScreen() {
  const [preferences, setPreferences] =
    useState<Preferences>(DEFAULT_PREFERENCES);
  const [isLoading, setIsLoading] = useState(false);

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
            seasons: key.seasons,
          } as const)
      ),
      ageFilters: ALL_AGE_TYPES.map(
        (key) =>
          ({
            value: key.value,
            emoji: t(`preferences.age.${key.value}.emoji`),
            label: t(`preferences.age.${key.value}.label`),
          } as const)
      ),
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
    setIsLoading(true);
    try {
      await SecureStore.setItemAsync(
        PREFERENCES_KEY,
        JSON.stringify(preferences)
      );
      router.replace(`/${ROUTES.HOME}`);
    } catch (error) {
      console.error("Error saving preferences:", error);
    } finally {
      setIsLoading(false);
    }
  }, [preferences, router]);

  const handleBack = useCallback(() => {
    router.replace(`/${ROUTES.HOME}`);
  }, [router]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <FilterBox title="preferences.era.title">
          <View style={styles.optionContainer}>
            {eras.map((era) => (
              <TouchableOpacity
                key={era.value}
                style={[
                  styles.option,
                  preferences.era.value === era.value && styles.optionSelected,
                ]}
                onPress={() =>
                  setPreferences({
                    ...preferences,
                    era: { value: era.value, seasons: era.seasons },
                  })
                }
              >
                <Text style={styles.optionEmoji}>{era.emoji}</Text>
                <Text style={styles.optionText}>{era.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </FilterBox>
        <FilterBox title="preferences.age.title">
          <View style={styles.optionContainer}>
            {ageFilters.map((filter) => (
              <TouchableOpacity
                key={filter.value}
                style={[
                  styles.option,
                  preferences.ageFilter.value === filter.value &&
                    styles.optionSelected,
                ]}
                onPress={() =>
                  setPreferences({
                    ...preferences,
                    ageFilter: { value: filter.value },
                  })
                }
              >
                <Text style={styles.optionEmoji}>{filter.emoji}</Text>
                <Text style={styles.optionText}>{filter.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </FilterBox>
        <FilterBox title="preferences.specials.title">
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
        </FilterBox>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>
              {isLoading ? t("common.loading") : t("preferences.buttons.save")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleBack} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>
              {t("common.backToHome")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
