export const ROUTES = {
  WELCOME: '/screens/welcome',
  HOME: '/screens/home',
  EPISODE: '/screens/episode',
  PREFERENCES: '/screens/preferences',
  NOT_FOUND: '/screens/not-found',
} as const;

export type AppRoute = keyof typeof ROUTES;

export const getRoute = (route: AppRoute): string => ROUTES[route];
