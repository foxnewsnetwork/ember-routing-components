import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export enum RoutePart {
  app = 'app',
  home = 'home',
  index = 'index',
  alt = 'alt',
  product = 'product',
  details = 'details',
  reviews = 'reviews'
}

export const APP_TREE = route(RoutePart.app, [
  route(RoutePart.home, [
    route(RoutePart.index),
    route(RoutePart.alt)
  ]),
  route(RoutePart.product, [
    route(RoutePart.details),
    route(RoutePart.reviews)
  ])
]);

export type RouteTree = {
  name: RoutePart,
  children: RouteTree[]
}

function route(name: RoutePart, children: RouteTree[] = []): RouteTree {
  return { name, children }
}

/**
 * We don't actually use the ember router,
 * but there are no conflicts, so we just
 * leave it here
 */
const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
});

export default Router;
