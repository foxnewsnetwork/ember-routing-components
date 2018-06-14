import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { RedirectFn } from 'ember-routing-components/utils/route-like';

export default class RoutingRedirect<ID> extends Component.extend({
  tagName: ''
}) {
  layout = layout;

  to: ID;

  redirect: RedirectFn<ID>;
};
