import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/endpoint-base';
import { RouteLike, defaultCheckActive, defaultUpdate } from 'ember-routing-components/utils/route-like';

export default class RoutingEndpointBase<T, ID> extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}) implements RouteLike<T, ID> {
  layout = layout;
  // normal class body definition here

  state: T;

  checkActive = defaultCheckActive;

  update = defaultUpdate;
};
