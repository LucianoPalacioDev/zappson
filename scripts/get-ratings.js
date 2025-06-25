const episodes = require("./save-episodes/data/episodes.json");

function getUniqueRatings() {
  try {
    const episodesData = Object.values(episodes);
    const allEpisodes = episodesData.flat();

    // Obtener todos los ratings únicos
    const ratings = new Set();

    allEpisodes.forEach((episode) => {
      const episodeData = Object.values(episode);
      const firstEpisode = episodeData[0];
      if (firstEpisode.rating) {
        ratings.add(firstEpisode.rating);
      }
    });

    // Convertir el Set a array y ordenar alfabéticamente
    const sortedRatings = Array.from(ratings).sort();

    console.log("Valores únicos de rating encontrados:");
    console.log("-----------------------------------");
    sortedRatings.forEach((rating) => console.log(`- ${rating}`));
    console.log("-----------------------------------");
    console.log(`Total: ${sortedRatings.length} valores únicos`);

    return sortedRatings;
  } catch (error) {
    console.error("Error al leer el archivo:", error);
    return [];
  }
}

// Ejecutar la función
getUniqueRatings();
