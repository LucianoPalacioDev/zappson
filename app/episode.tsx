import ErrorSeasonFetch from "@/components/Episode/Error/index";
import LoadingEpisode from "@/components/Episode/Loading";
import { EPISODES_IMAGES } from "@/constants/episodes";
import { DEFAULT_PREFERENCES } from "@/constants/filters";
import { ROUTES } from "@/constants/routes";
import { PREFERENCES_KEY } from "@/constants/store-keys";
import {
  EpisodeFirestore,
  Language,
  Preferences,
  SeasonFirestore,
} from "@/constants/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSeasons } from "@/services/firestoreService";
import useStyles from "@/styles/episode.styles";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const getEpisodesFromSeasons = (seasons: SeasonFirestore[]) => {
  return seasons.flatMap((season) => season.episodes);
};

export default function EpisodeScreen() {
  const [episodes, setEpisodes] = useState<EpisodeFirestore[]>([]);
  const [episode, setEpisode] = useState<EpisodeFirestore | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const styles = useStyles();
  const { t, language } = useLanguage();

  const searchEpisode = useCallback(() => {
    if (episodes.length === 0) return;

    setEpisode((prevEpisode) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * episodes.length);
      } while (episodes[randomIndex].id === prevEpisode?.id);
      return episodes[randomIndex];
    });

    setLoading(false);
  }, [episodes]);

  const fetchSeasons = useCallback(async () => {
    try {
      const savedPreferencesString = await SecureStore.getItemAsync(
        PREFERENCES_KEY
      );
      const savedPreferences = !!savedPreferencesString
        ? (JSON.parse(savedPreferencesString) as Preferences)
        : DEFAULT_PREFERENCES;
      const seasonsData = await getSeasons({
        preferences: savedPreferences,
        language: language as Language,
      });
      const episodesData = getEpisodesFromSeasons(seasonsData);
      setEpisodes(episodesData);
      return true;
    } catch (err) {
      console.log("Error fetching seasons:", err);
      setError(t("episode.errors.fetchError"));
      setLoading(false);
      return false;
    }
  }, [t, language]);

  useEffect(() => {
    fetchSeasons();
  }, [fetchSeasons]);

  useEffect(() => {
    searchEpisode();
  }, [searchEpisode]);

  const handleNewEpisode = () => {
    setLoading(true);
    setEpisode(null);
    searchEpisode();
  };

  const handleBack = () => {
    router.replace(`/${ROUTES.HOME}`);
  };

  const handleRetry = async () => {
    setError(null);
    setLoading(true);
    fetchSeasons();
  };

  const episodeImage = useMemo(() => {
    if (!episode) return null;
    const key =
      `s${episode.seasonNumber}/ep${episode.episodeNumber}`.toLowerCase();
    return EPISODES_IMAGES[key];
  }, [episode]);

  if (loading) {
    return <LoadingEpisode />;
  }

  if (error) {
    return (
      <ErrorSeasonFetch
        error={error}
        handleBack={handleBack}
        handleRetry={handleRetry}
      />
    );
  }

  if (!episode) return null;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          {episodeImage ? (
            <Image
              source={episodeImage}
              style={styles.image}
              contentFit="cover"
              transition={500}
            />
          ) : (
            <Text style={styles.imageEmoji}>📺</Text>
          )}
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <View style={styles.tags}>
              <Text style={styles.tagYellow}>
                {t("episode.season", { season: episode.seasonNumber })}{" "}
                {t("episode.episode", { episode: episode.episodeNumber })}
              </Text>
              <Text style={styles.tagRed}>{episode.rating}</Text>
            </View>

            <Text style={styles.title}>{episode.title}</Text>
            <ScrollView style={styles.descriptionContainer}>
              <Text style={styles.description}>{episode.description}</Text>
            </ScrollView>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={handleNewEpisode}
            >
              <Text style={styles.buttonText}>
                {t("episode.buttons.newEpisode")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={handleBack}
            >
              <Text style={styles.buttonText}>{t("common.backToHome")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
