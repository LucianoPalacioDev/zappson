/* global __dirname */
const path = require("path");
// project root
const projectRoot = path.join(__dirname, "..", "..", "..");

/**
 * The number of seasons.
 * @type {number}
 */
exports.SEASON_CANT = 36;

/**
 * The english output directory.
 * @type {string}
 */
exports.OUTPUT_DIR_ENGLISH = path.join(projectRoot, "scripts", "data-english");

/**
 * The spanish output directory.
 * @type {string}
 */

exports.OUTPUT_DIR_SPANISH = path.join(projectRoot, "scripts", "data-spanish");

/**
 * The english output file.
 * @type {string}
 */
exports.OUTPUT_FILE_ENGLISH = "episodes.json";

/**
 * The spanish output file.
 * @type {string}
 */
exports.OUTPUT_FILE_SPANISH = "episodes.json";

/**
 * The english output path.
 * @type {string}
 */
exports.OUTPUT_PATH_ENGLISH = path.join(
  exports.OUTPUT_DIR_ENGLISH,
  exports.OUTPUT_FILE_ENGLISH
);

/**
 * The spanish output path.
 * @type {string}
 */
exports.OUTPUT_PATH_SPANISH = path.join(
  exports.OUTPUT_DIR_SPANISH,
  exports.OUTPUT_FILE_SPANISH
);

exports.ENGLISH_LANGUAGE = "english";
exports.SPANISH_LANGUAGE = "spanish";

exports.AVAILABLE_LANGUAGES = [
  exports.ENGLISH_LANGUAGE,
  exports.SPANISH_LANGUAGE,
];
