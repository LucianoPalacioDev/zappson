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
  getCliParams,
} = require("./utils/utils");
const {
  OUTPUT_DIR_ENGLISH,
  OUTPUT_PATH_ENGLISH,
  ENGLISH_LANGUAGE,
  OUTPUT_DIR_SPANISH,
  OUTPUT_PATH_SPANISH,
} = require("./utils/Constants");
const seasonsIds = require("./utils/seasons-ids.json");
const { fetchSeasonData } = require("./utils/hidden-utils");

const getEpisodes = async (token) => {
  console.log("🚀 Getting episodes...");
  const formattedEpisodes = getInitialFormattedEpisodes();

  for (const [index, seasonId] of seasonsIds.entries()) {
    const currentSeasonNumber = index + 1;
    const seasonKey = `s${currentSeasonNumber}`;
    if (!seasonId) {
      console.warn(`No ID found for season ${currentSeasonNumber}`);
      continue;
    }

    try {
      console.log(`Fetching data for season ${currentSeasonNumber}...`);
      //NOTE: The token determines the language in which the chapters will be returned.
      const seasonData = await fetchSeasonData(seasonId, token);

      const seasonEpisodes = episodesDataFromSeason(seasonData);

      for (const episode of seasonEpisodes) {
        if (!formattedEpisodes[seasonKey]) {
          formattedEpisodes[seasonKey] = [];
        }
        formattedEpisodes[seasonKey].push(getFormattedEpisode(episode));
      }
    } catch (error) {
      console.error(
        `Error trying to get the episodes from season ${currentSeasonNumber}:`,
        error.message
      );
    }
  }
  return formattedEpisodes;
};

const saveEpisodesOnLocalFile = async (episodes, language) => {
  try {
    const currentOutputDir =
      language === ENGLISH_LANGUAGE ? OUTPUT_DIR_ENGLISH : OUTPUT_DIR_SPANISH;
    const currentOutputPath =
      language === ENGLISH_LANGUAGE ? OUTPUT_PATH_ENGLISH : OUTPUT_PATH_SPANISH;

    ensureDirectoryExists(currentOutputDir);

    const jsonContent = JSON.stringify(episodes, null, 2);

    fs.writeFileSync(currentOutputPath, jsonContent, "utf8");
  } catch (error) {
    console.error("Error trying to save episodes:", error);
  }
};

(async () => {
  try {
    const { language, token } = getCliParams();
    console.log(`🚀 Fetching episodes with language: ${language}`);

    const episodes = await getEpisodes(token);
    console.log("🚀 Episodes got successfully: ", JSON.stringify(episodes));

    await saveEpisodesOnLocalFile(episodes, language);
    console.log("🚀 Episodes saved successfully");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1); // Exit with error code 1 on error
  }
})();
