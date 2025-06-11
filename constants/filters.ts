import type { Preferences } from "@/constants/types";

const DEFAULT_PREFERENCES: Preferences = {
  era: "all",
  ageFilter: "all",
  includeSpecials: true,
};

const ALL_ERAS_TYPES = [
  { value: "all" },
  { value: "classic" },
  { value: "golden" },
  { value: "modern" },
];

const ALL_AGE_TYPES = [
  { value: "all" },
  { value: "atp" },
  { value: "sam13" },
  { value: "sam16" },
];

export { ALL_AGE_TYPES, ALL_ERAS_TYPES, DEFAULT_PREFERENCES };
