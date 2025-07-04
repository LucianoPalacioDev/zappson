import FilterBox from "@/components/Preferences/FilterBox";
import SeasonSelectorModal from "@/components/Preferences/SeasonSelectorModal";
import {
  ALL_AGE_TYPES,
  ALL_ERAS_TYPES,
  DEFAULT_PREFERENCES,
  DESCRIPTION_LENGTH_BRIEF,
  DESCRIPTION_LENGTH_FULL,
  DESCRIPTION_LENGTH_MEDIUM,
  ERA_CUSTOM,
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
  const [showCustomEraModal, setShowCustomEraModal] = useState(false);

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
      if (
        preferences.era.value === ERA_CUSTOM &&
        preferences.era.seasons.length === 0
      ) {
        return;
      }

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

  const handleCustomEraSelect = useCallback((seasons: number[]) => {
    setPreferences((prev) => ({
      ...prev,
      era: {
        value: ERA_CUSTOM,
        seasons: [...seasons].sort((a, b) => a - b),
      },
    }));
  }, []);

  const handleBack = useCallback(() => {
    router.replace(`/${ROUTES.HOME}`);
  }, [router]);

  const handleShowCustomEraModal = useCallback(() => {
    setShowCustomEraModal(true);
  }, []);

  const handleHideCustomEraModal = useCallback(() => {
    setShowCustomEraModal(false);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <FilterBox title="preferences.era.title">
          <View style={styles.optionContainer}>
            {eras.map((era) => {
              const isSelected = preferences.era.value === era.value;
              const isCustom = era.value === ERA_CUSTOM;

              return (
                <TouchableOpacity
                  key={era.value}
                  style={[styles.option, isSelected && styles.optionSelected]}
                  onPress={() => {
                    if (isCustom) {
                      handleShowCustomEraModal();
                      return;
                    }
                    setPreferences({
                      ...preferences,
                      era: { value: era.value, seasons: era.seasons },
                    });
                  }}
                >
                  <Text style={styles.optionEmoji}>{era.emoji}</Text>
                  <Text style={styles.optionText}>
                    {isCustom &&
                    preferences.era.value === ERA_CUSTOM &&
                    preferences.era.seasons.length > 0
                      ? `${t("preferences.era.custom.label")} (${
                          preferences.era.seasons.length
                        })`
                      : era.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
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
        <FilterBox title="preferences.descriptionLength.title">
          <View style={styles.optionContainer}>
            {(
              [
                DESCRIPTION_LENGTH_BRIEF,
                DESCRIPTION_LENGTH_MEDIUM,
                DESCRIPTION_LENGTH_FULL,
              ] as const
            ).map((length) => (
              <TouchableOpacity
                key={length}
                style={[
                  styles.option,
                  preferences.descriptionLength === length &&
                    styles.optionSelected,
                ]}
                onPress={() =>
                  setPreferences({
                    ...preferences,
                    descriptionLength: length,
                  })
                }
              >
                <Text style={styles.optionEmoji}>
                  {t(`preferences.descriptionLength.${length}.emoji`)}
                </Text>
                <Text style={styles.optionText}>
                  {t(`preferences.descriptionLength.${length}.label`)}
                </Text>
              </TouchableOpacity>
            ))}
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
      <SeasonSelectorModal
        visible={showCustomEraModal}
        onClose={handleHideCustomEraModal}
        selectedSeasons={preferences.era.seasons}
        onSelectSeasons={handleCustomEraSelect}
      />
    </ScrollView>
  );
}
