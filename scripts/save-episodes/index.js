/**
 * This script is used to save the episodes from the json files.
 * The script will save the episodes in a Firestore database.
 */

const admin = require("firebase-admin");
const serviceAccount = require("./utils/serviceAccountKey.json");
const episodes = require("../episodes.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const saveSeasonsToFirestore = async (episodesData) => {
  try {
    console.log("🚀 Starting saving seasons and episodes...");

    const seasonsRef = db.collection("seasons");
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
          const episodeRef = seasonRef.collection("episodes").doc(episodeId);
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

    console.log("🎉 Process completed! All seasons have been saved.");
  } catch (error) {
    console.error("❌ Error in saveSeasonsToFirestore:", error);
    throw error;
  } finally {
    admin.app().delete();
  }
};

(async () => {
  try {
    await saveSeasonsToFirestore(episodes);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error in the main execution:", error);
    process.exit(1);
  }
})();
