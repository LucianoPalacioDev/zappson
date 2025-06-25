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
