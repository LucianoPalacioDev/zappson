import { db } from "@/config/firebase";
import { AGE_12_PLUS, AGE_14_PLUS, AGE_ALL } from "@/constants/filters";
import { COLLECTIONS } from "@/constants/firebase-collections";
import type { Preferences } from "@/constants/types";
import { EpisodeFirestore, SeasonFirestore } from "@/constants/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const getFirebaseRating = (rating: string) => {
  switch (rating) {
    case AGE_ALL:
      return "all";
    case AGE_12_PLUS:
      return "12+";
    case AGE_14_PLUS:
      return "14+";
    default:
      return "all";
  }
};

// TODO: work with the preferences
export const getSeasons = async ({
  preferences,
}: {
  preferences: Preferences;
}): Promise<SeasonFirestore[]> => {
  try {
    const seasonsRef = collection(db, COLLECTIONS.SEASONS);
    const q = query(seasonsRef, orderBy("seasonNumber", "asc"));
    const querySnapshot = await getDocs(q);

    const seasonsWithEpisodes = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const seasonData = doc.data();

        const episodesRef = collection(
          db,
          COLLECTIONS.SEASONS,
          doc.id,
          COLLECTIONS.EPISODES
        );

        const firebaseRating = getFirebaseRating(preferences.ageFilter.value);

        const episodesQuery = query(
          episodesRef,
          orderBy("episodeNumber", "asc")
        );
        const episodesSnapshot = await getDocs(episodesQuery);

        const episodes: EpisodeFirestore[] = [];
        episodesSnapshot.forEach((episodeDoc) => {
          const episodeData = episodeDoc.data();
          const episodeRating = episodeData.rating || "all";
          if (firebaseRating === AGE_ALL || episodeRating === firebaseRating) {
            episodes.push({
              id: episodeDoc.id,
              episodeId: episodeDoc.id,
              episodeNumber: episodeData.episodeNumber,
              seasonNumber: seasonData.seasonNumber,
              title: episodeData.title,
              duration: episodeData.duration,
              rating: episodeRating,
              description: {
                brief: episodeData.description?.brief || "",
                full: episodeData.description?.full || "",
                medium: episodeData.description?.medium || "",
              },
            });
          }
        });

        return {
          id: doc.id,
          seasonNumber: seasonData.seasonNumber,
          episodeCount: seasonData.episodeCount || episodes.length,
          episodes: episodes,
        } as SeasonFirestore;
      })
    );

    return seasonsWithEpisodes;
  } catch (error) {
    console.error("Error fetching seasons with episodes:", error);
    throw error;
  }
};
