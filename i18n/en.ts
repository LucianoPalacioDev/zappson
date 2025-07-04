export default {
  welcome: {
    title: "Zappson",
    subtitle: "Welcome!",
    description:
      "Enjoy The Simpsons like the good old days: no episode selection. Discover random episodes and set your preferences like season or age rating. Let channel surfing choose for you!",
    namePlaceholder: "Type your name here",
    continueButton: "Continue",
    nameQuestion: "What is your name?",
  },
  home: {
    greeting: "Hello, {{name}}! 👋",
    subtitle: "Start zapping and find an episode",
    randomEpisode: "Random Episode",
    preferences: "Preferences",
    settingsIcon: "⚙️",
    tvIcon: "📺",
    diceIcon: "🎲",
  },
  preferences: {
    title: "Preferences",
    era: {
      title: "🎭 Era",
      all: { emoji: "📺", label: "All Eras" },
      classic: { emoji: "👑", label: "Classic Era (S1-S3)" },
      golden: { emoji: "⭐", label: "Golden Era (S4-S8)" },
      intermediate: { emoji: "🔄", label: "Intermediate Era (S9-S12)" },
      modern: { emoji: "🆕", label: "Modern Era (S13+)" },
      custom: { emoji: "🔢", label: "Custom Era" },
      customModal: {
        title: "Select Seasons",
        selectAll: "📋 All",
        clearAll: "🗑️ Clear",
      },
    },
    age: {
      title: "🔞 Rating",
      all: { emoji: "👨‍👩‍👧‍👦", label: "All Ages" },
      sam12: { emoji: "🧒", label: "TV-12" },
      sam14: { emoji: "👦", label: "TV-14" },
    },
    descriptionLength: {
      title: "Episode Description",
      brief: { emoji: "📏", label: "Brief" },
      medium: { emoji: "📝", label: "Medium" },
      full: { emoji: "📚", label: "Full" },
    },
    specials: {
      title: "🎃 Special Episodes",
      label: "Treehouse of Horror",
      description: "Halloween special episodes",
      emoji: "👻",
    },
    buttons: {
      save: "💾 Save Preferences",
    },
  },
  episode: {
    title: "Random Episode",
    loading: "Looking for the episodes",
    season: "S{{season}}",
    episode: "E{{episode}}",
    buttons: {
      newEpisode: "🎲 Another Episode",
    },
    errors: {
      fetchError:
        "We couldn't load the episodes. Please check your connection and try again.",
      retryError:
        "We're having trouble loading the episodes. Please try again later.",
    },
  },
  notFound: {
    title: "Oops!",
    subtitle: "Page Not Found",
    description:
      "The page you are looking for does not exist or has been removed. Why not go back to the home page?",
    goBackButton: "Back to Home",
  },
  common: {
    icons: {
      donut: "🍩",
    },
    loading: "⏳ Loading",
    retry: "🔄 Try Again",
    backToHome: "🏠 Back to Home",
    cancel: "❌ Cancel",
    apply: "✅ Apply",
  },
};
