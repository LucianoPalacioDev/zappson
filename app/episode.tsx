import LoadingEpisode from "@/components/Episode/Loading";
import { DEFAULT_EPISODES } from "@/constants/episodes";
import { ROUTES } from "@/constants/routes";
import { Episode } from "@/constants/types";
import { useLanguage } from "@/contexts/LanguageContext";
import useStyles from "@/styles/episode.styles";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function EpisodeScreen() {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const styles = useStyles();
  const { t } = useLanguage();

  const fetchEpisode = (episodes: Episode[]) => {
    const randomIndex = Math.floor(Math.random() * episodes.length);
    setEpisode(episodes[randomIndex]);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchEpisode(DEFAULT_EPISODES);
    }, 1500);
  }, []);

  const handleNewEpisode = () => {
    setLoading(true);
    setEpisode(null);
    setTimeout(() => {
      fetchEpisode(DEFAULT_EPISODES);
    }, 1500);
  };

  const handleBack = () => {
    router.replace(`/${ROUTES.HOME}`);
  };

  if (loading) {
    return <LoadingEpisode />;
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
