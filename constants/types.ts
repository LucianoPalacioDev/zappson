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

export { Age, Era, Preferences };
