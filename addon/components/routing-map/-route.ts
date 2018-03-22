import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing-map/-route';
import { thru } from 'ember-routing-components/utils/computed';

export default class RoutingMapRoute extends Component.extend({
  // anything which *must* be merged to prototype here
}).reopenClass({
  positionalParams: ['uri', 'routeName']
}) {
  tagName = '';
  layout = layout;

  uri: Location;
  routeName: string;

  // normal class body definition here
  isActive = thru([
    'uri',
    'routeName'
  ], () => {
    return false;
  })
};
