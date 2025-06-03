/**
 * This script is used to get the episodes from the json files.
 * The script will obtain basic data from each chapter of all seasons.
 */

const fs = require("fs");
const {
  getInitialFormattedEpisodes,
  episodesDataFromSeason,
  getFormattedEpisode,
  ensureDirectoryExists,
} = require("./utils/utils");
const { SEASON_CANT, OUTPUT_DIR, OUTPUT_PATH } = require("./utils/Constants");

const getEpisodes = async () => {
  console.log("🚀 Getting episodes...");
  const formattedEpisodes = getInitialFormattedEpisodes();

  for (let i = 1; i <= SEASON_CANT; i++) {
    try {
      const seasonData = require(`./data/episodes-s${i}.json`);
      const seasonEpisodes = episodesDataFromSeason(seasonData);

      for (const episode of seasonEpisodes) {
        const seasonKey = `s${i}`;
        if (!formattedEpisodes[seasonKey]) {
          formattedEpisodes[seasonKey] = [];
        }
        formattedEpisodes[seasonKey].push(getFormattedEpisode(episode));
      }
    } catch (error) {
      console.error(
        `Error trying to get the episodes from season ${i}:`,
        error
      );
    }
  }
  return formattedEpisodes;
};

const saveEpisodesOnLocalFile = async (episodes) => {
  try {
    ensureDirectoryExists(OUTPUT_DIR);

    const jsonContent = JSON.stringify(episodes, null, 2);

    fs.writeFileSync(OUTPUT_PATH, jsonContent, "utf8");
  } catch (error) {
    console.error("Error trying to save episodes:", error);
  }
};

(async () => {
  try {
    const episodes = await getEpisodes();
    console.log("🚀 Episodes got successfully");
    await saveEpisodesOnLocalFile(episodes);
    console.log("🚀 Episodes saved successfully");
  } catch (error) {
    console.error("Error getting the episodes:", error);
  }
})();
