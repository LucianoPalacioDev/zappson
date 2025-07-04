import type { Preferences } from "@/constants/types";

export const SEASON_CANT = 36;
export const ALL_SEASONS_RANGE = [1, SEASON_CANT] as const;
export const CLASSIC_SEASON_RANGE = [1, 3] as const;
export const GOLDEN_SEASON_RANGE = [4, 8] as const;
export const INTERMEDIATE_SEASON_RANGE = [9, 12] as const;
export const MODERN_SEASON_RANGE = [13, SEASON_CANT] as const;

export const ERA_ALL = "all";
export const ERA_CLASSIC = "classic";
export const ERA_GOLDEN = "golden";
export const ERA_INTERMEDIATE = "intermediate";
export const ERA_MODERN = "modern";
export const ERA_CUSTOM = "custom";

export const AGE_ALL = "all";
export const AGE_12_PLUS = "sam12";
export const AGE_14_PLUS = "sam14";

export const DESCRIPTION_LENGTH_BRIEF = "brief";
export const DESCRIPTION_LENGTH_MEDIUM = "medium";
export const DESCRIPTION_LENGTH_FULL = "full";

const generateSeasons = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const DEFAULT_PREFERENCES: Preferences = {
  era: {
    value: ERA_ALL,
    seasons: generateSeasons(ALL_SEASONS_RANGE[0], ALL_SEASONS_RANGE[1]),
  },
  ageFilter: { value: AGE_ALL },
  includeSpecials: true,
  descriptionLength: DESCRIPTION_LENGTH_BRIEF,
};

export const ALL_ERAS_TYPES = [
  {
    value: ERA_ALL,
    seasons: generateSeasons(ALL_SEASONS_RANGE[0], ALL_SEASONS_RANGE[1]),
  },
  {
    value: ERA_CLASSIC,
    seasons: generateSeasons(CLASSIC_SEASON_RANGE[0], CLASSIC_SEASON_RANGE[1]),
  },
  {
    value: ERA_GOLDEN,
    seasons: generateSeasons(GOLDEN_SEASON_RANGE[0], GOLDEN_SEASON_RANGE[1]),
  },
  {
    value: ERA_INTERMEDIATE,
    seasons: generateSeasons(
      INTERMEDIATE_SEASON_RANGE[0],
      INTERMEDIATE_SEASON_RANGE[1]
    ),
  },
  {
    value: ERA_MODERN,
    seasons: generateSeasons(MODERN_SEASON_RANGE[0], MODERN_SEASON_RANGE[1]),
  },
  {
    value: ERA_CUSTOM,
    seasons: [],
  },
];

export const ALL_AGE_TYPES = [
  { value: AGE_ALL },
  { value: AGE_12_PLUS },
  { value: AGE_14_PLUS },
];
