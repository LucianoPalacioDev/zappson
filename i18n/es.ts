export default {
  welcome: {
    title: "Los Simpsons",
    subtitle: "¡Bienvenido!",
    description:
      "Descubre episodios aleatorios de la familia más famosa de Springfield. ¡Prepárate para reír con Homer, Marge, Bart, Lisa y Maggie!",
    namePlaceholder: "Escribe tu nombre aquí",
    continueButton: "Continuar",
    nameQuestion: "¿Cuál es tu nombre?",
  },
  home: {
    greeting: "¡Hola, {{name}}! 👋",
    subtitle: "¿Qué te gustaría hacer hoy?",
    randomEpisode: "Episodio Aleatorio",
    preferences: "Preferencias",
    settingsIcon: "⚙️",
    tvIcon: "📺",
    donutIcon: "🍩",
    diceIcon: "🎲",
  },
  preferences: {
    title: "Preferencias",
    era: {
      title: "🎭 Época",
      all: { emoji: "📺", label: "Todas las épocas" },
      classic: { emoji: "👑", label: "Época Clásica (T1-T8)" },
      golden: { emoji: "⭐", label: "Época Dorada (T9-T15)" },
      modern: { emoji: "🆕", label: "Época Moderna (T16+)" },
      custom: { emoji: "🔢", label: "Epocas Personalizadas" },
      customModal: {
        title: "Seleccionar Temporadas",
        selectAll: "📋 Todas",
        clearAll: "🗑️ Limpiar",
      },
    },
    age: {
      title: "🔞 Clasificacion",
      all: { emoji: "👨‍👩‍👧‍👦", label: "Todas las edades" },
      sam12: { emoji: "🧒", label: "SAM 12+" },
      sam14: { emoji: "👦", label: "SAM 14+" },
    },
    descriptionLength: {
      title: "Descripcion del episodio",
      brief: { emoji: "📏", label: "Breve" },
      medium: { emoji: "📝", label: "Medio" },
      full: { emoji: "📚", label: "Completo" },
    },
    specials: {
      title: "🎃 Episodios Especiales",
      label: "Incluir Treehouse of Horror",
      description: "Episodios especiales de Halloween",
      emoji: "👻",
    },
    buttons: {
      save: "💾 Guardar Preferencias",
    },
  },
  episode: {
    title: "Episodio Aleatorio",
    loading: "Buscando episodios...",
    season: "T{{season}}",
    episode: "E{{episode}}",
    buttons: {
      newEpisode: "🎲 Otro Episodio",
    },
    errors: {
      fetchError:
        "No pudimos cargar los episodios. Por favor, verifica tu conexión e inténtalo de nuevo.",
      retryError:
        "Estamos teniendo problemas para cargar los episodios. Por favor, inténtalo de nuevo más tarde.",
    },
  },
  notFound: {
    title: "¡Ups!",
    subtitle: "Página no encontrada",
    description:
      "La página que estás buscando no existe o ha sido eliminada. ¿Por qué no vuelves a la página de inicio?",
    goBackButton: "Volver al inicio",
  },
  common: {
    loading: "⏳ Cargando...",
    retry: "🔄 Reintentar",
    backToHome: "🏠 Volver al Inicio",
    cancel: "❌ Cancelar",
    apply: "✅ Aplicar",
  },
};
