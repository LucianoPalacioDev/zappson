import { ENGLISH_LANGUAGE, SPANISH_LANGUAGE } from "../constants/languages";
import {
  DESCRIPTION_LENGTH_BRIEF,
  DESCRIPTION_LENGTH_FULL,
  DESCRIPTION_LENGTH_MEDIUM,
} from "./filters";

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
    donutIcon: string;
    diceIcon: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    goBackButton: string;
  };
};
