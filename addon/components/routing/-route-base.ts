import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing-map/-route';
import { thru } from 'ember-routing-components/utils/computed';
import { ActiveCheck, ParseFn, ChangeFn } from 'ember-routing-components/utils/types';

export default class RoutingRouteBase<T, P> extends Component.extend({
  // anything which *must* be merged to prototype here
}).reopenClass({
  positionalParams: ['uri', 'check', 'parse', 'change', 'parentActive', 'routeName']
}) {
  tagName = '';
  layout = layout;

  uri: T;
  check: ActiveCheck<T, P>;
  parse: ParseFn<T, P>;
  change: ChangeFn<T>;
  routeName: P;
  renders: Component;
  parentActive: boolean;

  isActive = thru([
    'uri',
    'routeName',
    'check'
  ], (uri: T, routeName: P, check: ActiveCheck<T, P>) => check(uri, routeName));

  childRouteBase = thru([
    'uri',
    'routeName',
    'parse'
  ], (uri: T, routeName: P, parse: ParseFn<T, P>) => parse(uri, routeName));
};
