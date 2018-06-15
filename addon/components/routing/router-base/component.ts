import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { CheckRouteFn, RedirectRouteFn } from 'ember-routing-components/utils/route-like';

export default class RoutingEndpointBase<T, ID> extends Component.extend({
  layout,
  tagName: ''
}) {
  state: T;

  checkRoute: CheckRouteFn<T, ID>;

  redirectRoute: RedirectRouteFn<T, ID>;

  name: ID;
};
