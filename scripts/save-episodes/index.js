/**
 * This script is used to save the episodes from the json files.
 * The script will save the episodes in a Firestore database.
 */

const admin = require("firebase-admin");
const serviceAccount = require("./utils/serviceAccountKey.json");
const episodesSpanish = require("../data-spanish/episodes.json");
const episodesEnglish = require("../data-english/episodes.json");

const SEASON_ENGISH_COLLECTION_NAME = "english-seasons";
const SEASON_SPANISH_COLLECTION_NAME = "spanish-seasons";
const EPISODES_COLLECTION_NAME = "episodes";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const saveSeasonsToFirestore = async (episodesData, collectionName) => {
  try {
    console.log(
      `🚀 Starting saving seasons and episodes on ${collectionName}...`
    );

    const seasonsRef = db.collection(collectionName);
    for (const [seasonNumber, seasonEpisodes] of Object.entries(episodesData)) {
      try {
        console.log(
          `📝 Processing ${seasonNumber} with ${seasonEpisodes.length} episodes...`
        );

        const seasonRef = seasonsRef.doc(seasonNumber);

        const batch = db.batch();

        batch.set(seasonRef, {
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          seasonNumber: parseInt(seasonNumber.replace("s", "")),
          episodeCount: seasonEpisodes.length,
        });

        seasonEpisodes.forEach((episodeObj) => {
          const [episodeId, episodeData] = Object.entries(episodeObj)[0];
          const episodeRef = seasonRef
            .collection(EPISODES_COLLECTION_NAME)
            .doc(episodeId);
          batch.set(episodeRef, {
            ...episodeData,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        });

        await batch.commit();
        console.log(
          `✅ ${seasonNumber} saved correctly with ${seasonEpisodes.length} episodes`
        );
      } catch (seasonError) {
        console.error(`❌ Error processing ${seasonNumber}:`, seasonError);
      }
    }

    console.log(
      `🎉 Process completed! All seasons have been saved on ${collectionName}.`
    );
  } catch (error) {
    console.error("❌ Error in saveSeasonsToFirestore:", error);
    throw error;
  } finally {
    admin.app().delete();
  }
};

(async () => {
  try {
    await saveSeasonsToFirestore(
      episodesSpanish,
      SEASON_SPANISH_COLLECTION_NAME
    );
    await saveSeasonsToFirestore(
      episodesEnglish,
      SEASON_ENGISH_COLLECTION_NAME
    );
    process.exit(0);
  } catch (error) {
    console.error("❌ Error in the main execution:", error);
    process.exit(1);
  }
})();
