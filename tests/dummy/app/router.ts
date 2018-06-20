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
  this.route('way-of-the-kings', function() {
    this.route('words-of-radiance', { path: 'words-of-radiance/:id' }, function() {
      this.route('oathbringer', { path: 'oathbringer/:id' });
    });
  });
});

export default Router;
