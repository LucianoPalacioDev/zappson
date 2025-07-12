import { ENGLISH_LANGUAGE, SPANISH_LANGUAGE } from "../constants/languages";
import {
  DESCRIPTION_LENGTH_BRIEF,
  DESCRIPTION_LENGTH_FULL,
  DESCRIPTION_LENGTH_MEDIUM,
} from "./filters";
import { ROUTES } from "./routes";

export type DescriptionLength =
  | typeof DESCRIPTION_LENGTH_BRIEF
  | typeof DESCRIPTION_LENGTH_MEDIUM
  | typeof DESCRIPTION_LENGTH_FULL;

export type Preferences = {
  era: Era;
  ageFilter: Age;
  includeSpecials: boolean;
  descriptionLength: DescriptionLength;
};

export type Era = {
  value: string;
  label?: string;
  emoji?: string;
  seasons: number[];
};

export type Age = {
  value: string;
  label?: string;
  emoji?: string;
};

export type Episode = {
  season: number;
  episode: number;
  title: string;
  description: string;
  ageRating: string;
  image: string;
};

export type EpisodeFirestore = {
  id: string;
  episodeNumber: number;
  seasonNumber: number;
  title: string;
  duration: number;
  episodeId: string;
  rating: string;
  description: string;
};

export type SeasonFirestore = {
  id: string;
  seasonNumber: number;
  episodeCount: number;
  episodes: EpisodeFirestore[];
};

export type Language = typeof ENGLISH_LANGUAGE | typeof SPANISH_LANGUAGE;

export type Translations = {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
    namePlaceholder: string;
    continueButton: string;
    nameQuestion: string;
  };
  home: {
    greeting: string;
    subtitle: string;
    randomEpisode: string;
    preferences: string;
    settingsIcon: string;
    tvIcon: string;
    diceIcon: string;
  };
  preferences: {
    title: string;
    era: {
      title: string;
      all: { emoji: string; label: string };
      classic: { emoji: string; label: string };
      golden: { emoji: string; label: string };
      intermediate: { emoji: string; label: string };
      modern: { emoji: string; label: string };
      custom: { emoji: string; label: string };
      customModal: {
        title: string;
        selectAll: string;
        clearAll: string;
      };
    };
    age: {
      title: string;
      all: { emoji: string; label: string };
      sam12: { emoji: string; label: string };
      sam14: { emoji: string; label: string };
    };
    descriptionLength: {
      title: string;
      brief: { emoji: string; label: string };
      medium: { emoji: string; label: string };
      full: { emoji: string; label: string };
    };
    specials: {
      title: string;
      label: string;
      description: string;
      emoji: string;
    };
    buttons: {
      save: string;
    };
  };
  episode: {
    title: string;
    loading: string;
    season: string;
    episode: string;
    buttons: {
      newEpisode: string;
    };
    errors: {
      fetchError: string;
      retryError: string;
    };
  };
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    goBackButton: string;
  };
  common: {
    loading: string;
    retry: string;
    backToHome: string;
    cancel: string;
    apply: string;
    saveChanges: string;
  };
  manageAccount: {
    title: string;
    nameLabel: string;
    namePlaceholder: string;
  };
};

export type ROUTES_TYPE = (typeof ROUTES)[keyof typeof ROUTES];
