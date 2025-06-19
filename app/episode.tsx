import ErrorSeasonFetch from "@/components/Episode/Error/index";
import LoadingEpisode from "@/components/Episode/Loading";
import { DEFAULT_EPISODES } from "@/constants/episodes";
import { DEFAULT_PREFERENCES } from "@/constants/filters";
import { ROUTES } from "@/constants/routes";
import { PREFERENCES_KEY } from "@/constants/store-keys";
import { Episode, Preferences, SeasonFirestore } from "@/constants/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSeasons } from "@/services/firestoreService";
import useStyles from "@/styles/episode.styles";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function EpisodeScreen() {
  const [seasons, setSeasons] = useState<SeasonFirestore[]>([]);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const styles = useStyles();
  const { t } = useLanguage();

  const fetchEpisode = (episodes: Episode[]) => {
    const randomIndex = Math.floor(Math.random() * episodes.length);
    setEpisode(episodes[randomIndex]);
    setLoading(false);
  };

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const savedPreferencesString = await SecureStore.getItemAsync(
          PREFERENCES_KEY
        );
        const savedPreferences = JSON.parse(savedPreferencesString || "{}");
        const seasonsData = await getSeasons({
          preferences: savedPreferences as Preferences,
        });
        // TODO: format and save just the episodes
        setSeasons(seasonsData);
        return true;
      } catch (err) {
        console.log("Error fetching seasons:", err);
        setError(t("episode.errors.fetchError"));
        setLoading(false);
        return false;
      }
    };

    fetchSeasons();
  }, [t]);

  useEffect(() => {
    setTimeout(() => {
      // TODO: send the correct episodes
      fetchEpisode(DEFAULT_EPISODES);
    }, 1500);
  }, []);

  const handleNewEpisode = () => {
    setLoading(true);
    setEpisode(null);
    setTimeout(() => {
      // TODO: send the correct episodes
      fetchEpisode(DEFAULT_EPISODES);
    }, 1500);
  };

  const handleBack = () => {
    router.replace(`/${ROUTES.HOME}`);
  };

  const handleRetry = async () => {
    setError(null);
    setLoading(true);
    try {
      const seasonsData = await getSeasons({
        preferences: DEFAULT_PREFERENCES,
      });
      setSeasons(seasonsData);
      setLoading(false);
    } catch (err) {
      console.log("Error retrying fetch:", err);
      setError(t("episode.errors.retryError"));
      setLoading(false);
    }
  };

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
          <Text style={styles.imageEmoji}>{episode.image}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <View style={styles.tags}>
              <Text style={styles.tagYellow}>
                {t("episode.season", { season: episode.season })}{" "}
                {t("episode.episode", { episode: episode.episode })}
              </Text>
              <Text style={styles.tagRed}>{episode.ageRating}</Text>
            </View>

            <Text style={styles.title}>{episode.title}</Text>
            <Text style={styles.description}>{episode.description}</Text>
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
              <Text style={styles.buttonText}>
                {t("episode.buttons.backHome")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
