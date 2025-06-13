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

type EpisodeFirestore = {
  id: string;
  episodeNumber: number;
  title: string;
  duration: number;
  episodeId: string;
  rating: string;
  description: {
    brief: string;
    full: string;
    medium: string;
  };
};

type SeasonFirestore = {
  id: string;
  seasonNumber: number;
  episodeCount: number;
  episodes: EpisodeFirestore[];
};

export { Age, Episode, EpisodeFirestore, Era, Preferences, SeasonFirestore };
