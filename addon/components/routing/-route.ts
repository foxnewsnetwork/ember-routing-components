import Component from '@ember/component';
import { get } from '@ember/object';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/-route';
import { RouteLike, CheckActiveFn, RedirectFn } from 'ember-routing-components/utils/route-like';

export default class RoutingRoute<ID> extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}).reopenClass({
  positionalParams: ['checkActive', 'redirect', 'routeId']
}) implements RouteLike<ID> {
  layout = layout;

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
  checkActive: CheckActiveFn<ID>;

  redirect: RedirectFn<ID>;

};
