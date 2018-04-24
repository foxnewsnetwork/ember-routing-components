import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/-curry';

export default class RoutingCurry<A, B, C> extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}).reopenClass({
  posisitionalParams: ['fn', 'arg']
}) {
  layout = layout;
  // normal class body definition here

  fn: (a: A, b: B) => C;

  arg: A;

  outFn =
};
