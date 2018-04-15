import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/call-fn2';
import { thru3 } from 'ember-routing-components/utils/computed';

export default class RoutingCallFn2<A, B, C> extends Component.extend({
  tagName: ''
}).reopenClass({
  positionalParams: ['arg1', 'arg2', 'fn2']
}) {
  layout = layout;

  arg1: A;

  arg2: B;

  fn2: (a: A, b: B) => C;

  result = thru3<RoutingCallFn2<A, B, C>, C>(
    'arg1',
    'arg2',
    'fn2', 
    (a, b, fn2) => fn2(a,b)
  );
};
