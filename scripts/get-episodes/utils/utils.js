const { SEASON_CANT } = require("./Constants");
const fs = require("fs");

/**
 * This function returns the duration of an episode in minutes.
 * @param {number} durationMs - The duration of the episode in milliseconds.
 * @returns {number} The duration of the episode in minutes.
 */
const getDurationOnMinutes = (durationMs) => {
  return Math.round(durationMs / 60000);
};

/**
 * This function returns an object with the initial formatted episodes.
 * @returns {Object} An object with the initial formatted episodes.
 */
exports.getInitialFormattedEpisodes = () => {
  const formattedEpisodes = {};
  for (let i = 1; i <= SEASON_CANT; i++) {
    formattedEpisodes[`s${i}`] = [];
  }
  return formattedEpisodes;
};

/**
 * This function returns the episodes data from a season.
 * @param {Object} seasonEpisodes - The season episodes data.
 * @returns {Array} The episodes data from the season.
 */
exports.episodesDataFromSeason = (seasonEpisodes) => {
  const seasonDataEpisodes = seasonEpisodes?.data?.season || {};
  return seasonDataEpisodes?.items || [];
};

/**
 * This function returns the formatted episode data.
 * @param {Object} episode - The episode data.
 * @returns {Object} The formatted episode data.
 */
exports.getFormattedEpisode = (episode) => {
  const episodeId = episode.id || "";
  const episodeData = episode?.visuals || {};
  return {
    [episodeId]: {
      episodeId: episodeId,
      episodeNumber: parseInt(episodeData.episodeNumber),
      title: episodeData.episodeTitle,
      description: episodeData.description,
      duration: getDurationOnMinutes(episodeData.durationMs),
      rating: episodeData.metastringParts.ratingInfo.rating.text,
    },
  };
};

/**
 * This function ensures that the directory exists.
 * @param {string} dirPath - The path of the directory.
 */
exports.ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
