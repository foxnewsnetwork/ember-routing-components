import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/let-ponyfill';

export default class RoutingLetPonyfill extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}).reopenClass({
  positionalParams: ['output']
}) {
  layout = layout;
};
