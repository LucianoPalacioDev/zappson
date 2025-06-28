import { db } from "@/config/firebase";
import { AGE_12_PLUS, AGE_14_PLUS, AGE_ALL } from "@/constants/filters";
import { COLLECTIONS } from "@/constants/firebase-collections";
import type { Language, Preferences } from "@/constants/types";
import { EpisodeFirestore, SeasonFirestore } from "@/constants/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { ENGLISH_LANGUAGE } from "../constants/languages";

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

export const getSeasons = async ({
  preferences,
  language,
}: {
  preferences: Preferences;
  language: Language;
}): Promise<SeasonFirestore[]> => {
  try {
    const collectionSeasonName =
      language === ENGLISH_LANGUAGE
        ? COLLECTIONS.SEASONS_ENGLISH
        : COLLECTIONS.SEASONS_SPANISH;
    const seasonsRef = collection(db, collectionSeasonName);
    const q = query(seasonsRef, orderBy("seasonNumber", "asc"));
    const querySnapshot = await getDocs(q);

    const preferencesEraSeasons = preferences.era.seasons;
    const preferencesAgeFilter = preferences.ageFilter.value;
    const preferencesSpecials = preferences.includeSpecials;
    const preferencesDescriptionLength = preferences.descriptionLength;

    const filteredSeasons = querySnapshot.docs.filter((doc) => {
      const seasonData = doc.data();
      return preferencesEraSeasons.includes(seasonData.seasonNumber);
    });

    const seasonsWithEpisodes = await Promise.all(
      filteredSeasons.map(async (doc) => {
        const seasonData = doc.data();

        const episodesRef = collection(
          db,
          collectionSeasonName,
          doc.id,
          COLLECTIONS.EPISODES
        );

        const firebaseRating = getFirebaseRating(preferencesAgeFilter);

        const episodesQuery = query(
          episodesRef,
          orderBy("episodeNumber", "asc")
        );
        const episodesSnapshot = await getDocs(episodesQuery);

        const episodes: EpisodeFirestore[] = [];
        episodesSnapshot.forEach((episodeDoc) => {
          const episodeData = episodeDoc.data();
          const episodeRating = episodeData.rating || "all";
          const isTreehouseOfHorror = episodeData.isTreehouseOfHorror;

          if (isTreehouseOfHorror && !preferencesSpecials) {
            return;
          }

          if (firebaseRating === AGE_ALL || episodeRating === firebaseRating) {
            episodes.push({
              id: episodeDoc.id,
              episodeId: episodeDoc.id,
              episodeNumber: episodeData.episodeNumber,
              seasonNumber: seasonData.seasonNumber,
              title: episodeData.title,
              duration: episodeData.duration,
              rating: episodeRating,
              description: (episodeData.description || {})[
                preferencesDescriptionLength
              ],
            });
          }
        });

        return {
          id: doc.id,
          seasonNumber: seasonData.seasonNumber,
          episodeCount: episodes.length,
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
