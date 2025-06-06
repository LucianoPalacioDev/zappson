export const ROUTES = {
  WELCOME: "welcome",
  HOME: "home",
  EPISODE: "episode",
  PREFERENCES: "preference",
  NOT_FOUND: "not-found",
} as const;

export type AppRoute = keyof typeof ROUTES;

export const getRoute = (route: AppRoute): string => ROUTES[route];
