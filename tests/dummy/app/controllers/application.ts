import Controller from '@ember/controller';
import { RoutePart } from '../router';

export default class Application extends Controller.extend({

}) {
  RoutePart = RoutePart;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'application': Application;
  }
}
