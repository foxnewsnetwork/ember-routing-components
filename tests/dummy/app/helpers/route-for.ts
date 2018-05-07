import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export enum RouteMap {
  APP = 'ROUTER#APP',
  HOME = 'ROUTER#HOME',
  HOME_INDEX = 'ROUTER#HOME/INDEX',
  HOME_ALT = 'ROUTER#HOME/ALT',
  PRODUCT = 'ROUTER#PRODUCT',
  PRODUCT_DETAILS = 'ROUTER#PRODUCT/DETAILS',
  PRODUCT_REVIEWS = 'ROUTER#PRODUCT/REVIEWS'
}

const KnownKeys = Object.keys(RouteMap).join(', ');

type Params = [keyof RouteMap];

class UnknownRouteError extends Error {
  constructor(route) {
    super(`I dont know of a route named "${route}". You need to select from among: ${KnownKeys}`);
    this.name = 'UnknownRouteError';
  }
}
export function routeFor(params: Params/*, hash*/) {
  const [routeKey] = params;
  const name = RouteMap[routeKey];
  if (isPresent(name)) {
    return name;
  } else {
    throw new UnknownRouteError(routeKey);
  }
}

export default helper(routeFor);
