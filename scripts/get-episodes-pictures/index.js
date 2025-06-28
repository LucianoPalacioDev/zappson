/* global __dirname */
const axios = require("axios");
const { existsSync, promises: fs, mkdirSync } = require("fs");
const path = require("path");
const projectRoot = path.join(__dirname, "..", "..");

const episodes = require("../data-english/episodes.json");
const { BASE_IMAGE_URL, IMAGE_PARAMS } = require("./utils/Constants");
const OUTPUT_DIR = path.join(projectRoot, "assets", "images", "episodes");
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

/**
 * Creates a directory if it doesn't exist
 * @param {string} dirPath - Path to the directory
 */
const ensureDirectoryExists = (dirPath) => {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
};

/**
 * Downloads an image from a URL and saves it to disk
 * @param {string} url - Image URL
 * @param {string} outputPath - Path to save the image
 * @param {number} retryCount - Current retry attempt
 * @returns {Promise<void>}
 */
const downloadImage = async (url, outputPath, retryCount = 0) => {
  try {
    const response = await axios({
      method: "GET",
      url,
      responseType: "arraybuffer",
      timeout: 10000,
    });

    await fs.writeFile(outputPath, response.data);
    console.log(`✅ Saved: ${outputPath}`);
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      console.log(`⚠️  Retry ${retryCount + 1}/${MAX_RETRIES} for ${url}`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return downloadImage(url, outputPath, retryCount + 1);
    }
    console.error(`❌ Failed to download ${url}:`, error.message);
  }
};

/**
 * Processes all episodes and downloads their images
 */
const downloadAllImages = async () => {
  if (!episodes || Object.keys(episodes).length === 0) {
    throw new Error("No episodes data found");
  }
  try {
    ensureDirectoryExists(OUTPUT_DIR);

    for (const [seasonNumber, seasonEpisodes] of Object.entries(episodes)) {
      const seasonDir = path.join(OUTPUT_DIR, seasonNumber);
      ensureDirectoryExists(seasonDir);

      console.log(
        `\n📺 Processing ${seasonNumber} with ${seasonEpisodes.length} episodes...`
      );

      for (const episodeObj of seasonEpisodes) {
        const [episodeId, episodeData] = Object.entries(episodeObj)[0];
        const { imageId, episodeNumber } = episodeData;

        if (!imageId) {
          console.log(`⚠️  No imageId found for ${seasonNumber}/${episodeId}`);
          continue;
        }

        const imageUrl = `${BASE_IMAGE_URL}/${imageId}/${IMAGE_PARAMS}`;
        const episodePath = `ep${parseInt(episodeNumber)}`;
        const outputPath = path.join(seasonDir, `${episodePath}.webp`);

        if (existsSync(outputPath)) {
          console.log(`⏩ Skipping existing: ${outputPath}`);
          continue;
        }

        console.log(`⬇️  Downloading: ${seasonNumber}/${episodePath}`);
        await downloadImage(imageUrl, outputPath);
      }
    }

    console.log("\n✨ All images downloaded successfully!");
  } catch (error) {
    console.error("❌ Error in downloadAllImages:", error);
    process.exit(1);
  }
};

(async () => {
  try {
    await downloadAllImages();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error in the main execution:", error);
    process.exit(1);
  }
})();
