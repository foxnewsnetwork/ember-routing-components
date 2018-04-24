import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/call-fn';
import { apfn } from 'ember-routing-components/utils/computed';

export default class RoutingCallFn<A, B> extends Component.extend({
  tagName: ''
}).reopenClass({
  positionalParams: ['arg1', 'fn']
}) {
  layout = layout;

  arg1: A;

  fn: (a: A) => B;

  result = apfn<RoutingCallFn<A, B>, B>('arg1');
};
