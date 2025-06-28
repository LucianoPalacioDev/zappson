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
const { OUTPUT_DIR_ENGLISH, OUTPUT_PATH } = require("./utils/Constants");
const seasonsIds = require("./utils/seasons-ids.json");
const { fetchSeasonData } = require("./utils/hidden-utils");

const getEpisodes = async () => {
  console.log("🚀 Getting episodes...");
  const formattedEpisodes = getInitialFormattedEpisodes();

  for (const [index, seasonId] of seasonsIds.entries()) {
    const seasonKey = `s${index + 1}`;
    if (!seasonId) {
      console.warn(`No ID found for season ${seasonId}`);
      continue;
    }

    try {
      console.log(`Fetching data for season ${seasonId}...`);
      const seasonData = await fetchSeasonData(seasonId);

      const seasonEpisodes = episodesDataFromSeason(seasonData);

      for (const episode of seasonEpisodes) {
        if (!formattedEpisodes[seasonKey]) {
          formattedEpisodes[seasonKey] = [];
        }
        formattedEpisodes[seasonKey].push(getFormattedEpisode(episode));
      }
    } catch (error) {
      console.error(
        `Error trying to get the episodes from season ${seasonId}:`,
        error.message
      );
    }
  }
  return formattedEpisodes;
};

const saveEpisodesOnLocalFile = async (episodes) => {
  try {
    ensureDirectoryExists(OUTPUT_DIR_ENGLISH);

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
