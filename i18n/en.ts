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
      title: "🎭 Select Era",
      all: { emoji: "📺", label: "All Eras" },
      classic: { emoji: "👑", label: "Classic Era (S1-S8)" },
      golden: { emoji: "⭐", label: "Golden Era (S9-S15)" },
      modern: { emoji: "🆕", label: "Modern Era (S16+)" },
    },
    age: {
      title: "🔞 Age Filter",
      all: { emoji: "👨‍👩‍👧‍👦", label: "All Ages" },
      atp: { emoji: "👶", label: "ATP Only" },
      sam13: { emoji: "🧒", label: "TV-13" },
      sam16: { emoji: "👦", label: "TV-16" },
    },
    specials: {
      title: "🎃 Special Episodes",
      label: "Include Treehouse of Horror",
      description: "Halloween special episodes",
      emoji: "👻",
    },
    buttons: {
      save: "💾 Save Preferences",
      cancel: "❌ Cancel",
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
    // TODO: add a icon of sand clock
    loading: "⏳ Loading...",
  },
};
