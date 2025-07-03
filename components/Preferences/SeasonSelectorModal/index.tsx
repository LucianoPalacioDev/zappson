import { SEASON_CANT } from "@/constants/filters";
import { useLanguage } from "@/contexts/LanguageContext";
import React, { useCallback, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import useStyles from "./styles";

type SeasonSelectorModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedSeasons: number[];
  onSelectSeasons: (seasons: number[]) => void;
};

export default function SeasonSelectorModal({
  visible,
  onClose,
  selectedSeasons,
  onSelectSeasons,
}: SeasonSelectorModalProps) {
  const styles = useStyles();
  const { t } = useLanguage();
  const [tempSelectedSeasons, setTempSelectedSeasons] =
    useState<number[]>(selectedSeasons);

  const toggleSeason = useCallback((season: number) => {
    setTempSelectedSeasons((prevTempSelectedSeasons) =>
      prevTempSelectedSeasons.includes(season)
        ? prevTempSelectedSeasons.filter((s) => s !== season)
        : [...prevTempSelectedSeasons, season]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setTempSelectedSeasons(
      Array.from({ length: SEASON_CANT }, (_, i) => i + 1)
    );
  }, []);

  const handleClearAll = useCallback(() => {
    setTempSelectedSeasons([]);
  }, []);

  const handleApply = useCallback(() => {
    onSelectSeasons(tempSelectedSeasons);
    onClose();
  }, [onClose, onSelectSeasons, tempSelectedSeasons]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {t("preferences.era.customModal.title")}
          </Text>

          <View style={styles.actionsRow}>
            <TouchableOpacity
              onPress={handleSelectAll}
              style={styles.actionButton}
            >
              <Text style={styles.actionButtonText}>
                {t("preferences.era.customModal.selectAll")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClearAll}
              style={styles.actionButton}
            >
              <Text style={styles.actionButtonText}>
                {t("preferences.era.customModal.clearAll")}
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.seasonsContainer}>
            <View style={styles.seasonsGrid}>
              {Array.from({ length: SEASON_CANT }, (_, i) => i + 1).map(
                (season) => (
                  <TouchableOpacity
                    key={season}
                    style={[
                      styles.seasonItem,
                      tempSelectedSeasons.includes(season) &&
                        styles.seasonItemSelected,
                    ]}
                    onPress={() => toggleSeason(season)}
                  >
                    <Text
                      style={[
                        styles.seasonText,
                        tempSelectedSeasons.includes(season) &&
                          styles.seasonTextSelected,
                      ]}
                    >
                      {season}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </ScrollView>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>{t("common.cancel")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.applyButton,
                tempSelectedSeasons.length === 0 && styles.applyButtonDisabled,
              ]}
              onPress={handleApply}
              disabled={tempSelectedSeasons.length === 0}
            >
              <Text style={styles.applyButtonText}>
                {t("common.apply")}{" "}
                {tempSelectedSeasons.length > 0 &&
                  `(${tempSelectedSeasons.length})`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
