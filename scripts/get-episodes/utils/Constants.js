const path = require("path");

/**
 * The number of seasons.
 * @type {number}
 */
exports.SEASON_CANT = 36;

/**
 * The output directory.
 * @type {string}
 */
exports.OUTPUT_DIR = path.join(
  process.cwd(),
  "scripts",
  "save-episodes",
  "data"
);

/**
 * The output file.
 * @type {string}
 */
exports.OUTPUT_FILE = "episodes.json";

/**
 * The output path.
 * @type {string}
 */
exports.OUTPUT_PATH = path.join(exports.OUTPUT_DIR, exports.OUTPUT_FILE);
