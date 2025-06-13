import { db } from "@/config/firebase";
import { COLLECTIONS } from "@/constants/firebase-collections";
import { EpisodeFirestore, SeasonFirestore } from "@/constants/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const getSeasons = async (): Promise<SeasonFirestore[]> => {
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
        const episodesQuery = query(
          episodesRef,
          orderBy("episodeNumber", "asc")
        );
        const episodesSnapshot = await getDocs(episodesQuery);

        const episodes: EpisodeFirestore[] = episodesSnapshot.docs.map(
          (episodeDoc) => {
            const episodeData = episodeDoc.data();
            return {
              id: episodeDoc.id,
              episodeId: episodeDoc.id,
              episodeNumber: episodeData.episodeNumber,
              title: episodeData.title,
              duration: episodeData.duration,
              rating: episodeData.rating,
              description: {
                brief: episodeData.description?.brief || "",
                full: episodeData.description?.full || "",
                medium: episodeData.description?.medium || "",
              },
            };
          }
        );

        return {
          id: doc.id,
          seasonNumber: seasonData.seasonNumber,
          episodeCount: seasonData.episodeCount || episodes.length,
          episodes: episodes,
        } as SeasonFirestore;
      })
    );

    return [seasonsWithEpisodes[0]];
  } catch (error) {
    console.error("Error fetching seasons with episodes:", error);
    throw error;
  }
};
