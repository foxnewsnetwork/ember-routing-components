import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';

export default class RoutingLetPonyfill extends Component.extend({
  layout,
  tagName: ''
}).reopenClass({
  positionalParams: ['output']
}) {

};
