import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export enum RouteMap {
  APP = 'ROUTER#APP',
  HOME = 'ROUTER#HOME',
  HOME_INDEX = 'ROUTER#HOME/INDEX',
  HOME_ALT = 'ROUTER#HOME/ALT',
  PRODUCT = 'ROUTER#PRODUCT',
  PRODUCT_DETAILS = 'ROUTER#PRODUCT/DETAILS',
  PRODUCT_REVIEWS = 'ROUTER#PRODUCT/REVIEWS'
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
