export const ROUTES = {
  WELCOME: "screens/welcome/index",
  HOME: "screens/home/index",
  EPISODE: "screens/episode/index",
  PREFERENCES: "screens/preferences/index",
  NOT_FOUND: "screens/not-found/index",
} as const;

export type AppRoute = keyof typeof ROUTES;

export const getRoute = (route: AppRoute): string => ROUTES[route];
