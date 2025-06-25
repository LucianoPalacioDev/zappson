export default {
  welcome: {
    title: "The Simpsons",
    subtitle: "Welcome!",
    description:
      "Discover random episodes of Springfield's most famous family. Get ready to laugh with Homer, Marge, Bart, Lisa, and Maggie!",
    namePlaceholder: "Type your name here",
    continueButton: "Continue",
    nameQuestion: "What is your name?",
  },
  home: {
    greeting: "Hello, {{name}}! 👋",
    subtitle: "What would you like to do today?",
    randomEpisode: "Random Episode",
    preferences: "Preferences",
    settingsIcon: "⚙️",
    tvIcon: "📺",
    donutIcon: "🍩",
    diceIcon: "🎲",
  },
  preferences: {
    title: "Preferences",
    era: {
      title: "🎭 Era",
      all: { emoji: "📺", label: "All Eras" },
      classic: { emoji: "👑", label: "Classic Era (S1-S8)" },
      golden: { emoji: "⭐", label: "Golden Era (S9-S15)" },
      modern: { emoji: "🆕", label: "Modern Era (S16+)" },
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
      label: "Include Treehouse of Horror",
      description: "Halloween special episodes",
      emoji: "👻",
    },
    buttons: {
      save: "💾 Save Preferences",
    },
  },
  episode: {
    title: "Random Episode",
    loading: "Looking for an episodes...",
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
    loading: "⏳ Loading...",
    retry: "🔄 Try Again",
    backToHome: "🏠 Back to Home",
  },
};
