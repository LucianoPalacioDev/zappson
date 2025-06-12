type Preferences = {
  era: string;
  ageFilter: string;
  includeSpecials: boolean;
};

type Era = {
  value: string;
  label: string;
  emoji: string;
};

type Age = {
  value: string;
  label: string;
  emoji: string;
};

type Episode = {
  season: number;
  episode: number;
  title: string;
  description: string;
  ageRating: string;
  image: string;
};

export { Age, Episode, Era, Preferences };
