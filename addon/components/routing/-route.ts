import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/-route';
import { RouteLike, defaultCheckActive, defaultUpdate } from 'ember-routing-components/utils/route-like';

export default class RoutingRoute<T, ID> extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}).reopenClass({
  positionalParams: ['routeId', 'state', 'checkActive', 'update']
}) implements RouteLike<T, ID> {
  layout = layout;
  // normal class body definition here

  state: T;

  /**
   * The uniquely identifying name of this route
   * can be anything as long as it's consistent
   * with its `checkActive` method
   * 
   * @attr
   */
  routeId: ID;

  /**
   * The associated check active function, used
   * to determine if this route is active or not
   */
  checkActive = defaultCheckActive;

  update = defaultUpdate;
};
